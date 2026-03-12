import Link from 'next/link';
import React from 'react';

import { useUserStore } from '@/app/store';
import { AuthPopup } from '@/features/auth';
import { ModeToggle } from '@/features/theme';
import { UserNav } from '@/features/user-nav';

export function Header() {
  const { user } = useUserStore();

  return (
    <header className="sticky top-0 z-10 bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">AmalDoskhoev Template</h1>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
          {user ? <UserNav /> : <AuthPopup />}
        </div>
      </div>
    </header>
  );
}
