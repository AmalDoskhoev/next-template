'use client';

import { BottomNav, Footer, Header } from '@/widgets/layout';
import React from 'react';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container flex-1 mx-auto px-4 py-8 pb-20">
        {children}
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
