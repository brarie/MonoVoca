'use client';

import { usePathname } from 'next/navigation';
import { SideTabs, SideTabItem } from '@/components/SideTabs';
import { BookOpen, Folder, Search } from 'lucide-react';

const tabs: SideTabItem[] = [
  { id: '/dashboard/my-words', label: '단어장', icon: BookOpen },
  { id: '/dashboard/my-words/folders', label: '폴더', icon: Folder },
  { id: '/dashboard/my-words/search', label: '단어 통합검색', icon: Search },
];

const tabHeaders = {
  '/dashboard/my-words': {
    title: '단어장',
    description: '내 단어장을 관리할 수 있어요.',
  },
  '/dashboard/my-words/folders': {
    title: '폴더',
    description: '폴더를 만들어서 단어장을 정리할 수 있어요.',
  },
  '/dashboard/my-words/search': {
    title: '단어 통합검색',
    description: '내 단어장에 속한 단어를 통합검색해서 빠르게 찾을 수 있어요.',
  },
};

export default function MyWordsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const header = tabHeaders[pathname as keyof typeof tabHeaders] || {
    title: '',
    description: '',
  };

  return (
    <div>
      {/* Page Header */}
      <div className="mb-3">
        <h1 className="text-2xl font-bold text-white mb-1">{header.title}</h1>
        <p className="text-gray-400 text-sm">{header.description}</p>
      </div>

      {/* Horizontal Separator */}
      <div className="border-t border-white/10 mb-3" />

      {/* Sidebar + Content */}
      <div className="flex gap-3">
        <SideTabs items={tabs} activeTab={pathname} />

        {/* Main Content */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </div>
  );
}
