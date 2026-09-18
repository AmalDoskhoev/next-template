'use client';

import {
  CircleCheckIcon,
  InfoIcon,
  TriangleAlertIcon,
  XIcon
} from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Card, CardContent } from './card';
import { IconButton } from './icon-button';
import { Typography } from './typography';

const TOAST_TONES = {
  info: {
    icon: InfoIcon,
    chip: 'bg-(--gray-200) text-(--gray-700)'
  },
  success: {
    icon: CircleCheckIcon,
    chip: 'bg-(--amber-100) text-amber-900'
  },
  warning: {
    icon: TriangleAlertIcon,
    chip: 'bg-(--amber-100) text-amber-900'
  },
  error: {
    icon: XIcon,
    chip: 'bg-(--red-100) text-red-600'
  }
} as const;

type ToastProps = {
  tone?: keyof typeof TOAST_TONES;
  title?: string;
  message?: string;
  action?: React.ReactNode;
  onClose?: () => void;
  className?: string;
};

function Toast({
  tone = 'info',
  title,
  message,
  action,
  onClose,
  className
}: ToastProps) {
  const { icon: Icon, chip } = TOAST_TONES[tone];

  return (
    <Card
      role="status"
      className={cn('w-[380px] max-w-full gap-0 py-0 shadow-lg', className)}
    >
      <CardContent className="flex items-start gap-3 px-4 py-3.5">
        <span
          className={cn(
            'inline-flex size-7 shrink-0 items-center justify-center rounded-full',
            chip
          )}
        >
          <Icon className="size-[15px]" />
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          {title && (
            <Typography variant="p2" className="font-semibold">
              {title}
            </Typography>
          )}
          {message && (
            <Typography variant="bodySm" className="text-(--gray-600)">
              {message}
            </Typography>
          )}
          {action && <div className="mt-1.5">{action}</div>}
        </div>
        {onClose && (
          <IconButton
            type="button"
            size="sm"
            variant="ghost"
            aria-label="Закрыть"
            onClick={onClose}
          >
            <XIcon />
          </IconButton>
        )}
      </CardContent>
    </Card>
  );
}

export { Toast };
export type { ToastProps };
