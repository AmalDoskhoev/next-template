'use client';

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import * as React from 'react';

import { IconButton } from './icon-button';
import { Input } from './input';

type PasswordInputProps = Omit<
  React.ComponentProps<typeof Input>,
  'type' | 'endAdornment'
>;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(props, ref) {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
      setShowPassword(show => !show);
    };

    return (
      <Input
        {...props}
        ref={ref}
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <IconButton
            type="button"
            variant="ghost"
            size="sm"
            className="size-6"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          >
            {showPassword ? (
              <EyeOffIcon className="text-(--gray-500)" />
            ) : (
              <EyeIcon className="text-(--gray-500)" />
            )}
          </IconButton>
        }
      />
    );
  }
);

export { PasswordInput };
export type { PasswordInputProps };
