'use client';

import { CircleIcon } from 'lucide-react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  label,
  id,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item> & {
  label?: React.ReactNode;
}) {
  const generatedId = React.useId();
  const radioId = id ?? generatedId;

  const control = (
    <RadioGroupPrimitive.Item
      id={radioId}
      data-slot="radio-group-item"
      className={cn(
        'aspect-square size-[22px] shrink-0 cursor-pointer rounded-full border border-(--gray-400) bg-(--white) text-ink-900 shadow-xs outline-none transition-[color,box-shadow]',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-(--red-500) aria-invalid:ring-[3px] aria-invalid:ring-red-500/30',
        'data-[state=checked]:border-ink-900',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 fill-ink-900" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );

  if (!label) return control;

  return (
    <div className="inline-flex items-center gap-3">
      {control}
      <Typography
        variant="p2"
        component="label"
        htmlFor={radioId}
        className="cursor-pointer"
      >
        {label}
      </Typography>
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
