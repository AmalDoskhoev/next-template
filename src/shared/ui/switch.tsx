'use client';

import { Switch as SwitchPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> & {
  label?: React.ReactNode;
  tone?: 'ink' | 'accent';
  rootClassName?: string;
  size?: 'sm' | 'default';
};

function Switch({
  className,
  size = 'default',
  label,
  tone = 'ink',
  rootClassName,
  id,
  ...props
}: SwitchProps) {
  const generatedId = React.useId();
  const switchId = id ?? generatedId;

  const control = (
    <SwitchPrimitive.Root
      id={switchId}
      data-slot="switch"
      data-size={size}
      className={cn(
        'peer group/switch inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs outline-none transition-all',
        'focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[size=default]:h-[26px] data-[size=default]:w-11 data-[size=sm]:h-4 data-[size=sm]:w-7',
        'data-[state=unchecked]:bg-(--gray-300)',
        tone === 'accent'
          ? 'data-[state=checked]:bg-amber-500'
          : 'data-[state=checked]:bg-ink-900',
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block rounded-full bg-(--white) shadow-sm ring-0 transition-transform',
          'group-data-[size=default]/switch:size-5 group-data-[size=sm]/switch:size-3',
          'data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0.5'
        )}
      />
    </SwitchPrimitive.Root>
  );

  if (!label) return control;

  return (
    <div className={cn('inline-flex items-center gap-3', rootClassName)}>
      {control}
      <Typography
        variant="p2"
        component="label"
        htmlFor={switchId}
        className="cursor-pointer"
      >
        {label}
      </Typography>
    </div>
  );
}

export { Switch };
export type { SwitchProps };
