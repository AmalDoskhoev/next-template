import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type InputProps = React.ComponentProps<'input'> & {
  label?: string;
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
    error,
    id,
    startAdornment,
    endAdornment,
    disabled,
    'aria-invalid': ariaInvalid,
    ...props
  },
  ref
) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  const isInvalid = !!error || !!ariaInvalid;

  return (
    <div className={cn('flex flex-col', rootClassName)}>
      {label && (
        <Typography
          variant="h5"
          component="label"
          htmlFor={inputId}
          className="mb-3"
        >
          {label}
        </Typography>
      )}

      <div
        className={cn(
          'border-input dark:bg-input/30 flex h-9 w-full min-w-0 items-center rounded-md border bg-transparent shadow-xs transition-[color,box-shadow]',
          'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
          isInvalid &&
            'border-destructive ring-destructive/20 dark:ring-destructive/40 ring-[3px]',
          disabled && 'pointer-events-none cursor-not-allowed opacity-50',
          className
        )}
      >
        {startAdornment && (
          <div className="flex shrink-0 items-center justify-center pl-2">
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
            'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground h-full w-full min-w-0 bg-transparent px-3 py-1 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:cursor-not-allowed md:text-sm',
            startAdornment && 'pl-2',
            endAdornment && 'pr-1'
          )}
          {...props}
          aria-invalid={isInvalid}
        />

        {endAdornment && (
          <div className="flex shrink-0 items-center justify-center pr-1.5">
            {endAdornment}
          </div>
        )}
      </div>

      {error && (
        <Typography variant="caption2" className="mt-1 text-destructive">
          {error}
        </Typography>
      )}
    </div>
  );
});

export { Input };
export type { InputProps };
