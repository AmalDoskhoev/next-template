import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import * as React from 'react';

import { cn } from '@/shared/utils';

const badgeVariants = cva(
  'inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border border-transparent px-3 font-semibold whitespace-nowrap transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3',
  {
    variants: {
      variant: {
        default: 'h-[26px] bg-ink-900 text-white text-xs',
        secondary: 'h-[26px] bg-(--gray-100) text-(--gray-600) text-xs',
        destructive: 'h-[26px] bg-red-500 text-white text-xs',
        outline:
          'h-[26px] border-(--gray-300) bg-transparent text-(--gray-600) text-xs',
        ghost: 'h-[26px] text-(--gray-600) text-xs',
        link: 'h-[26px] text-ink-900 underline-offset-4 text-xs',
        high: 'h-[26px] bg-(--amber-100) text-(--amber-900) text-xs',
        mid: 'h-[26px] bg-(--gray-200) text-(--gray-700) text-xs',
        low: 'h-[26px] bg-(--gray-100) text-(--gray-600) text-xs',
        done: 'h-[26px] bg-(--gray-100) text-(--gray-700) text-xs',
        idle: 'h-[26px] bg-transparent text-(--gray-600) shadow-[inset_0_0_0_1px_var(--gray-300)] text-xs',
        overdue: 'h-[26px] bg-(--red-500) text-(--white) text-xs',
        ink: 'h-[26px] bg-gray-700 text-white text-xs',
        accent: 'h-[26px] bg-(--amber-100) text-amber-900 text-xs'
      },
      size: {
        sm: 'h-5 px-2 text-[11px]',
        md: 'h-[26px] px-3 text-xs'
      }
    },
    defaultVariants: {
      variant: 'idle',
      size: 'md'
    }
  }
);

function Badge({
  className,
  variant = 'idle',
  size = 'md',
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
