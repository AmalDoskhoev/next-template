import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-semibold tracking-[-0.005em] transition disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-[0.42] [&_svg]:pointer-events-none [&_svg]:shrink-0 outline-none focus-visible:ring-[3px] focus-visible:ring-amber-500/30 active:scale-[0.97]',
  {
    variants: {
      variant: {
        default:
          'bg-ink-900 text-white border border-ink-900 hover:bg-ink-600 hover:border-ink-600',
        primary:
          'bg-ink-900 text-white border border-ink-900 hover:bg-ink-600 hover:border-ink-600',
        highlight:
          'bg-ink-900 text-white border border-ink-900 hover:bg-ink-600 hover:border-ink-600',
        accent:
          'bg-amber-500 text-ink-900 border border-amber-500 hover:bg-amber-400 hover:border-amber-400',
        secondary:
          'bg-(--white) text-(--ink-900) border border-(--gray-300) shadow-xs hover:bg-(--gray-100)',
        outline:
          'bg-(--white) text-(--ink-900) border border-(--gray-300) shadow-xs hover:bg-(--gray-100)',
        ghost:
          'bg-transparent text-(--gray-600) border border-transparent hover:bg-(--gray-100) hover:text-(--ink-900)',
        destructive:
          'bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600',
        danger:
          'bg-red-500 text-white border border-red-500 hover:bg-red-600 hover:border-red-600',
        link: 'text-(--amber-700) underline-offset-4 hover:text-(--amber-600) hover:underline border-transparent'
      },
      size: {
        sm: 'h-8 px-3.5 text-[13px] rounded-lg',
        default: 'h-10 px-5 text-sm rounded-lg',
        md: 'h-10 px-5 text-sm rounded-lg',
        lg: 'h-12 px-6.5 text-base rounded-lg',
        icon: 'size-10 rounded-full',
        'icon-sm': 'size-8 rounded-full',
        'icon-lg': 'size-12 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(function Button(
  { className, variant, size, asChild = false, ...props },
  ref
) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
});

export { Button, buttonVariants };
