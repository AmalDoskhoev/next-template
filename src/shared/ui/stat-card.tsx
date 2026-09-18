import { ArrowDownIcon, ArrowUpIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Badge } from './badge';
import { Card, CardContent } from './card';
import { Typography } from './typography';

type StatCardProps = React.ComponentProps<'div'> & {
  label: string;
  value: React.ReactNode;
  delta?: React.ReactNode;
  deltaTone?: 'up' | 'down' | 'neutral';
  icon?: React.ReactNode;
};

function StatCard({
  className,
  label,
  value,
  delta,
  deltaTone = 'up',
  icon,
  ...props
}: StatCardProps) {
  const DeltaIcon =
    deltaTone === 'up'
      ? ArrowUpIcon
      : deltaTone === 'down'
        ? ArrowDownIcon
        : MinusIcon;

  return (
    <Card className={cn('py-0 shadow-xs', className)} {...props}>
      <CardContent className="flex items-center gap-4 py-5">
        {icon && (
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-(--gray-100) text-(--ink-900)">
            {icon}
          </span>
        )}
        <div className="flex min-w-0 flex-col gap-0.5">
          <div className="flex items-baseline gap-2">
            <Typography variant="metric">{value}</Typography>
            {delta != null && (
              <Badge
                variant={
                  deltaTone === 'down'
                    ? 'destructive'
                    : deltaTone === 'up'
                      ? 'accent'
                      : 'secondary'
                }
                size="sm"
                className={cn(
                  'gap-0.5',
                  deltaTone === 'down' && 'bg-(--red-100) text-red-600',
                  deltaTone === 'up' && 'bg-(--amber-100) text-amber-700'
                )}
              >
                <DeltaIcon className="size-[11px]" />
                {delta}
              </Badge>
            )}
          </div>
          <Typography variant="bodySm" className="truncate text-(--gray-600)">
            {label}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export { StatCard };
export type { StatCardProps };
