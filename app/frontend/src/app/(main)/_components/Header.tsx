'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const menuItems = [
  { label: '홈', href: '/' },
  { label: '공지사항', href: '/notice' },
  { label: '도움말', href: '/help' },
  { label: '문의하기', href: '/contact' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/50 backdrop-blur-md px-4">
      <div className="grid grid-cols-3 h-16 items-center gap-4">
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="text-2xl font-black italic "
              style={{ fontFamily: 'var(--font-exo-2)' }}
            >
              MonoVoca
            </div>
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-all relative py-1 ${
                  isActive
                    ? 'text-foreground font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-[5px] left-0 right-0 h-0.5 bg-foreground rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="flex items-center justify-end gap-3 col-start-3">
          <Button
            variant="outline"
            asChild
            className="hidden lg:flex text-xs font-bold border-white bg-transparent hover:bg-white/10 text-white"
          >
            <Link href="/login">로그인</Link>
          </Button>
          <Button
            asChild
            className="hidden lg:flex text-xs font-bold bg-white text-black hover:bg-white/90"
          >
            <Link href="/sign-up">회원가입</Link>
          </Button>
          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger className="flex lg:hidden" asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">메뉴 열기</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle>메뉴</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 p-4 pt-0">
                {menuItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-base font-medium transition-colors py-2 ${
                        isActive
                          ? 'text-foreground font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    asChild
                    className="text-xs font-bold border-white bg-transparent hover:bg-white/10 text-white"
                  >
                    <Link href="/login">로그인</Link>
                  </Button>
                  <Button
                    asChild
                    className="text-xs font-bold bg-white text-black hover:bg-white/90"
                  >
                    <Link href="/sign-up">회원가입</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
