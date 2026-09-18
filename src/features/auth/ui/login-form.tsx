'use client';

import { LockIcon, UserRoundIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { routes } from '@/shared/constants';
import { useAuth } from '@/shared/hooks';
import { Button, ControlledInput, ControlledPasswordInput } from '@/shared/ui';
import { errorNotification } from '@/shared/utils';

import { loginUser } from '../api/auth-api';
import { useLoginForm } from '../model/auth.cases';

export function LoginForm() {
  const router = useRouter();
  const { signIn } = useAuth();
  const form = useLoginForm();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = form.handleSubmit(async values => {
    setIsSubmitting(true);

    try {
      const response = await loginUser(values);
      await signIn(response);
      router.push(routes.home);
    } catch (error) {
      errorNotification(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-5">
      <ControlledInput
        control={form.control}
        name="login"
        label="Логин"
        placeholder="Логин"
        autoComplete="username"
        inputSize="lg"
        startAdornment={<UserRoundIcon className="size-4" />}
      />
      <ControlledPasswordInput
        control={form.control}
        name="password"
        label="Пароль"
        placeholder="Пароль"
        autoComplete="current-password"
        inputSize="lg"
        startAdornment={<LockIcon className="size-4" />}
      />
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        Войти
      </Button>
    </form>
  );
}
