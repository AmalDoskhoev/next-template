'use client';

import { CheckIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  label?: React.ReactNode;
  error?: string;
  tone?: 'ink' | 'accent';
  rootClassName?: string;
};

function Checkbox({
  className,
  label,
  error,
  tone = 'ink',
  rootClassName,
  id,
  ...props
}: CheckboxProps) {
  const generatedId = React.useId();
  const checkboxId = id ?? generatedId;

  const control = (
    <CheckboxPrimitive.Root
      id={checkboxId}
      data-slot="checkbox"
      aria-invalid={!!error || undefined}
      className={cn(
        'peer size-[22px] shrink-0 cursor-pointer rounded-full border border-(--gray-400) bg-(--white) shadow-xs outline-none transition-shadow',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-(--red-500) aria-invalid:ring-[3px] aria-invalid:ring-red-500/30',
        tone === 'accent'
          ? 'data-[state=checked]:border-amber-500 data-[state=checked]:bg-amber-500 data-[state=checked]:text-ink-900'
          : 'data-[state=checked]:border-ink-900 data-[state=checked]:bg-ink-900 data-[state=checked]:text-white',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label && !error) return control;

  return (
    <div className={cn('flex flex-col gap-1', rootClassName)}>
      <div className="inline-flex items-center gap-3">
        {control}
        {label && (
          <Typography
            variant="p2"
            component="label"
            htmlFor={checkboxId}
            className="cursor-pointer"
          >
            {label}
          </Typography>
        )}
      </div>
      {error && (
        <Typography variant="caption2" className="text-(--red-600)">
          {error}
        </Typography>
      )}
    </div>
  );
}

export { Checkbox };
export type { CheckboxProps };
