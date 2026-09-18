import * as React from 'react';

import { cn } from '@/shared/utils';

import { Button } from './button';

const ICON_BUTTON_VARIANT = {
  ink: 'default',
  light: 'secondary',
  accent: 'accent',
  ghost: 'ghost',
  outline: 'outline',
  danger: 'danger'
} as const;

const ICON_BUTTON_SIZE = {
  sm: 'icon-sm',
  md: 'icon',
  lg: 'icon-lg'
} as const;

type IconButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'variant' | 'size'
> & {
  variant?: keyof typeof ICON_BUTTON_VARIANT;
  size?: keyof typeof ICON_BUTTON_SIZE;
};

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { className, variant = 'light', size = 'md', ...props },
    ref
  ) {
    return (
      <Button
        ref={ref}
        data-slot="icon-button"
        variant={ICON_BUTTON_VARIANT[variant]}
        size={ICON_BUTTON_SIZE[size]}
        className={cn(
          variant === 'accent' &&
            'border-(--amber-100) bg-(--amber-100) text-amber-900 hover:border-(--amber-100) hover:bg-(--amber-200)',
          className
        )}
        {...props}
      />
    );
  }
);

export { IconButton };
export type { IconButtonProps };
