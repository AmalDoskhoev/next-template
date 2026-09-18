import * as React from 'react';

import { cn } from '@/shared/utils';

import { Typography } from './typography';

type TextareaProps = React.ComponentProps<'textarea'> & {
  label?: string;
  hint?: string;
  error?: string;
  rootClassName?: string;
};

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      rootClassName,
      label,
      hint,
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
      <div className={cn('flex flex-col gap-2', rootClassName)}>
        {label && (
          <Typography
            variant="caption2"
            component="label"
            htmlFor={textareaId}
            className="font-semibold text-(--gray-600)"
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
            'min-h-24 w-full resize-y rounded-[10px] border border-(--gray-300) bg-(--white) px-3.5 py-3 text-sm leading-[1.55] text-(--ink-900) outline-none transition placeholder:text-(--gray-500)',
            'focus-visible:border-(--amber-500) focus-visible:ring-[3px] focus-visible:ring-amber-500/30',
            isInvalid &&
              'border-(--red-500) focus-visible:border-(--red-500) focus-visible:ring-[3px] focus-visible:ring-red-500/30',
            disabled && 'cursor-not-allowed bg-(--gray-100) opacity-60',
            className
          )}
          {...props}
        />

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
  }
);

export { Textarea };
export type { TextareaProps };
