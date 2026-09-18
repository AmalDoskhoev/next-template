'use client';

import { usePathname } from 'next/navigation';
import * as React from 'react';

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/shared/ui';

import { AppSidebar } from './app-sidebar';

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <div className="flex items-center gap-3 md:hidden">
          <SidebarTrigger />
          <span className="text-base font-semibold tracking-[-0.01em]">
            Ailam GOV
          </span>
        </div>

        <div key={pathname} className="flex min-w-0 flex-1 flex-col gap-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
