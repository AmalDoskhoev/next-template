import './styles/globals.scss';

import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { WithProviders } from './providers';

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Ailam',
  description: 'Государственная образовательная платформа'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <WithProviders>{children}</WithProviders>
      </body>
    </html>
  );
}
