'use client';

import * as React from 'react';

import { cn } from '@/shared/utils';

import { ToggleGroup, ToggleGroupItem } from './toggle-group';

type SegmentedOption = {
  value: string;
  label: React.ReactNode;
  count?: number;
};

type SegmentedControlProps = {
  options: readonly SegmentedOption[];
  value: string;
  onValueChange: (value: string) => void;
  size?: 'sm' | 'md';
  className?: string;
};

function SegmentedControl({
  options,
  value,
  onValueChange,
  size = 'md',
  className
}: SegmentedControlProps) {
  return (
    <ToggleGroup
      type="single"
      variant="outline"
      spacing={2}
      size={size === 'sm' ? 'sm' : 'lg'}
      value={value}
      onValueChange={next => {
        if (next) onValueChange(next);
      }}
      className={cn('flex-wrap', className)}
    >
      {options.map(option => (
        <ToggleGroupItem
          key={option.value}
          value={option.value}
          className="px-[18px] text-[13px]"
        >
          {option.count != null && (
            <span className="tabular-nums text-(--gray-500)">
              {option.count}
            </span>
          )}
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

export { SegmentedControl };
export type { SegmentedControlProps, SegmentedOption };
