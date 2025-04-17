'use client';

import { BottomNav } from '@/widgets/bottom-nav';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
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
