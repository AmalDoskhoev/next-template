import React from 'react';

import { AppShell } from '@/widgets/layout';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <AppShell>{children}</AppShell>;
}
