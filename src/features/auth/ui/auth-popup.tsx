'use client';

import React from 'react';

import { useUserStore } from '@/app/store';
import { saveTokenStorage } from '@/shared/services';
import {
  Button,
  ControlledInput,
  ControlledPhoneInput,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/shared/ui';
import { errorNotification } from '@/shared/utils';

import { registerUser, requestAuthCode, verifyAuthCode } from '../api/auth-api';
import { useAuthPopupCases } from '../model/auth.cases';

export function AuthPopup() {
  const { setAuthPopup, authPopup, setUserData } = useUserStore();
  const { step, nextStep, reset, phoneForm, codeForm, finalForm } =
    useAuthPopupCases();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handlePhoneSubmit = phoneForm.handleSubmit(async data => {
    setIsSubmitting(true);

    try {
      await requestAuthCode(data);
      nextStep();
    } catch (error) {
      errorNotification(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  const handleCodeSubmit = codeForm.handleSubmit(async data => {
    setIsSubmitting(true);

    try {
      await verifyAuthCode({
        phone: phoneForm.getValues().phone,
        code: data.code
      });
      nextStep();
    } catch (error) {
      errorNotification(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  const handleFinalSubmit = finalForm.handleSubmit(async data => {
    setIsSubmitting(true);

    try {
      const response = await registerUser({
        phone: phoneForm.getValues().phone,
        ...data
      });

      saveTokenStorage(response.token);
      setUserData(response.user);
      setAuthPopup(false);
      reset();
    } catch (error) {
      errorNotification(error);
    } finally {
      setIsSubmitting(false);
    }
  });

  return (
    <Dialog
      open={authPopup}
      onOpenChange={open => {
        setAuthPopup(open);
        if (!open) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button className="hidden md:flex" variant="ghost">
          Войти
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:max-w-[425px]">
        <DialogHeader className="flex flex-col items-center gap-2 !text-center">
          <DialogTitle className="text-xl font-bold">
            Добро пожаловать в AmalDoskhoev Template.
          </DialogTitle>
          <DialogDescription>
            {step === 1 &&
              'Введите ваш номер телефона для входа или регистрации'}
            {step === 2 && 'Введите код из SMS для подтверждения'}
            {step === 3 && 'Заполните дополнительную информацию'}
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <ControlledPhoneInput
              control={phoneForm.control}
              name="phone"
              label="Номер телефона"
              placeholder="+7 (999) 999-99-99"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Получить код
            </Button>
            <div className="text-xs text-muted-foreground text-center">
              Нажимая «Получить код», вы соглашаетесь с нашими{' '}
              <a href="#" className="underline">
                Условиями
              </a>{' '}
              и{' '}
              <a href="#" className="underline">
                политикой
              </a>
              .
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCodeSubmit} className="space-y-4">
            <ControlledInput
              control={codeForm.control}
              name="code"
              label="Код из SMS"
              placeholder="Введите код"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Подтвердить
            </Button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <ControlledInput
              control={finalForm.control}
              name="email"
              label="Email"
              type="email"
              placeholder="your@email.com"
            />
            <ControlledInput
              control={finalForm.control}
              name="name"
              label="Имя"
              placeholder="Ваше имя"
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              Завершить регистрацию
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
