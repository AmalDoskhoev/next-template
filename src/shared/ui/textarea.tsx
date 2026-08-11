import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string;
  error?: string;
  rootClassName?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      rootClassName,
      label,
      error,
      id,
      disabled,
      'aria-invalid': ariaInvalid,
      ...props
    },
    ref
  ) {
    const generatedId = React.useId();
    const textareaId = id ?? generatedId;
    const isInvalid = !!error || !!ariaInvalid;

    return (
      <div className={cn('flex flex-col', rootClassName)}>
        {label && (
          <Typography
            variant="h5"
            component="label"
            htmlFor={textareaId}
            className="mb-3"
          >
            {label}
          </Typography>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          data-slot="textarea"
          disabled={disabled}
          aria-invalid={isInvalid}
          className={cn(
            'border-input dark:bg-input/30 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground field-sizing-content min-h-24 w-full resize-none rounded-md border bg-transparent px-3 py-2 text-base shadow-xs outline-none transition-[color,box-shadow] md:text-sm',
            'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
            isInvalid &&
              'border-destructive ring-destructive/20 dark:ring-destructive/40 ring-[3px]',
            disabled && 'cursor-not-allowed opacity-50',
            className
          )}
          {...props}
        />

        {error && (
          <Typography variant="caption2" className="mt-1 text-destructive">
            {error}
          </Typography>
        )}
      </div>
    );
  }
);

export { Textarea };
export type { TextareaProps };
