'use client';

import * as React from 'react';

import { TooltipProvider } from '@/shared/ui';

export function WithTooltip({ children }: { children: React.ReactNode }) {
  return <TooltipProvider delayDuration={200}>{children}</TooltipProvider>;
}
