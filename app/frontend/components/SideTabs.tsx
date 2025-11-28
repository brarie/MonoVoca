'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export interface SideTabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface SideTabsProps {
  items: SideTabItem[];
  activeTab: string;
  className?: string;
}

export function SideTabs({ items, activeTab, className }: SideTabsProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TooltipProvider>
      <div
        className={cn(
          'shrink-0 border-r border-white/10 transition-all duration-300 ease-in-out',
          expanded ? 'w-48 pr-6' : 'w-12 pr-4 md:w-48 md:pr-6',
          className
        )}
      >
        {/* Toggle Button - Mobile Only */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="md:hidden mb-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label={expanded ? '사이드바 접기' : '사이드바 펼치기'}
        >
          {expanded ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        <nav className="space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const showTooltip = !expanded;

            const linkContent = (
              <Link
                href={item.id}
                className={cn(
                  'flex items-center gap-3 px-2 md:px-3 py-2 text-sm rounded-md transition-colors',
                  isActive
                    ? 'bg-white/10 text-white font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                )}
              >
                {Icon && <Icon className="w-4 h-4 shrink-0" />}
                <span
                  className={cn(
                    'truncate transition-opacity duration-300',
                    expanded ? 'opacity-100' : 'opacity-0 md:opacity-100',
                    expanded ? 'block' : 'hidden md:block'
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );

            return (
              <div key={item.id}>
                {/* Mobile: With Tooltip when collapsed */}
                <div className="md:hidden">
                  {showTooltip ? (
                    <Tooltip>
                      <TooltipTrigger asChild>{linkContent}</TooltipTrigger>
                      <TooltipContent
                        side="right"
                        className="bg-white text-black"
                      >
                        <p>{item.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ) : (
                    linkContent
                  )}
                </div>

                {/* Desktop: Without Tooltip */}
                <div className="hidden md:block">{linkContent}</div>
              </div>
            );
          })}
        </nav>
      </div>
    </TooltipProvider>
  );
}
