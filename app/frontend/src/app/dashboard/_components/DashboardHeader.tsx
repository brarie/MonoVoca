'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Library, BarChart3, Bell, User } from 'lucide-react';

const menuItems = [
  { label: '홈', href: '/dashboard', icon: Home },
  { label: '내 단어장', href: '/dashboard/my-words', icon: BookOpen },
  { label: '라이브러리', href: '/dashboard/library', icon: Library },
  { label: '통계', href: '/dashboard/stats', icon: BarChart3 },
];

export function DashboardHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      {/* Top Section: Logo + User Icons */}
      <div className="border-b border-white/20 p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center">
            <div
              className="text-2xl font-black italic text-white"
              style={{ fontFamily: 'var(--font-exo-2)' }}
            >
              MonoVoca
            </div>
          </Link>

          {/* User Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Navigation Menu */}
      <nav className="px-6 border-b border-white/20">
        <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
          {menuItems.map((item) => {
            const isActive =
              item.href === '/dashboard'
                ? pathname === '/dashboard'
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 text-sm whitespace-nowrap py-3 transition-all relative ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
