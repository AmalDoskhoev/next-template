'use client';

import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  tone?: 'accent' | 'ink' | 'danger';
  label?: string;
  showValue?: boolean;
};

function Progress({
  className,
  value = 0,
  tone = 'accent',
  label,
  showValue,
  ...props
}: ProgressProps) {
  const percent = Math.max(0, Math.min(100, value ?? 0));

  const indicatorClassName =
    tone === 'danger'
      ? 'bg-red-500'
      : tone === 'ink'
        ? 'bg-gray-500'
        : 'bg-amber-500';

  const bar = (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={percent}
      className={cn(
        'relative h-2 w-full overflow-hidden rounded-full bg-(--gray-100)',
        !(label || showValue) && className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          'h-full w-full flex-1 rounded-full transition-all',
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - percent}%)` }}
      />
    </ProgressPrimitive.Root>
  );

  if (!label && !showValue) return bar;

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex justify-between text-(--gray-600)">
        <Typography variant="caption2">{label}</Typography>
        {showValue && (
          <Typography
            variant="caption2"
            className="font-semibold text-(--ink-900) tabular-nums"
          >
            {Math.round(percent)}%
          </Typography>
        )}
      </div>
      {bar}
    </div>
  );
}

export { Progress };
export type { ProgressProps };
