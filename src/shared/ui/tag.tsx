'use client';

import { XIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Badge } from './badge';

type TagProps = React.ComponentProps<'span'> & {
  tone?: 'neutral' | 'outline';
  onRemove?: () => void;
};

function Tag({
  className,
  tone = 'neutral',
  onRemove,
  children,
  ...props
}: TagProps) {
  return (
    <Badge
      data-slot="tag"
      variant={tone === 'outline' ? 'outline' : 'secondary'}
      className={cn('gap-1.5 font-medium', onRemove && 'pr-1.5', className)}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          aria-label="Удалить"
          onClick={onRemove}
          className="inline-flex size-[18px] cursor-pointer items-center justify-center rounded-full border-0 bg-(--gray-300) p-0"
        >
          <XIcon className="size-[11px] text-(--gray-700)" />
        </button>
      )}
    </Badge>
  );
}

export { Tag };
export type { TagProps };
