import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

const inputWrapVariants = cva(
  'flex items-center w-full gap-2 border bg-(--white) transition focus-within:border-(--amber-500) focus-within:ring-[3px] focus-within:ring-amber-500/30',
  {
    variants: {
      inputSize: {
        sm: 'h-8 px-3',
        md: 'h-10 px-3.5',
        lg: 'h-12 px-4'
      },
      pill: {
        true: 'rounded-full',
        false: 'rounded-[10px]'
      }
    },
    defaultVariants: {
      inputSize: 'md',
      pill: false
    }
  }
);

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputWrapVariants> & {
    label?: string;
    hint?: string;
    error?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    rootClassName?: string;
  };

const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    className,
    rootClassName,
    type,
    label,
    hint,
    error,
    id,
    startAdornment,
    endAdornment,
    disabled,
    inputSize,
    pill,
    'aria-invalid': ariaInvalid,
    ...props
  },
  ref
) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const isInvalid = !!error || !!ariaInvalid;

  return (
    <div className={cn('flex flex-col gap-2', rootClassName)}>
      {label && (
        <Typography
          variant="caption2"
          component="label"
          htmlFor={inputId}
          className="font-semibold text-(--gray-600)"
        >
          {label}
        </Typography>
      )}

      <div
        className={cn(
          inputWrapVariants({ inputSize, pill }),
          isInvalid &&
            'border-(--red-500) focus-within:border-(--red-500) focus-within:ring-[3px] focus-within:ring-red-500/30',
          !isInvalid && 'border-(--gray-300)',
          disabled &&
            'pointer-events-none cursor-not-allowed bg-(--gray-100) opacity-60',
          className
        )}
      >
        {startAdornment && (
          <div className="flex shrink-0 items-center justify-center text-(--gray-500)">
            {startAdornment}
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          disabled={disabled}
          data-slot="input"
          className={cn(
            'h-full w-full min-w-0 bg-transparent text-sm text-(--ink-900) outline-none placeholder:text-(--gray-500) disabled:cursor-not-allowed'
          )}
          {...props}
          aria-invalid={isInvalid}
        />

        {endAdornment && (
          <div className="flex shrink-0 items-center justify-center">
            {endAdornment}
          </div>
        )}
      </div>

      {(error || hint) && (
        <Typography
          variant="caption2"
          className={error ? 'text-(--red-600)' : 'text-(--gray-500)'}
        >
          {error || hint}
        </Typography>
      )}
    </div>
  );
});

export { Input };
export type { InputProps };
