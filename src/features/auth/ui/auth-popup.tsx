'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Label
} from '@/shared/ui';
import { useUserStore } from '@/app/store';
import { saveTokenStorage } from '@/shared/services';
import { useAuthPopupCases } from '../model/auth.cases';

export function AuthPopup() {
  const { toggleAuthPopup, authPopup, setUserData } = useUserStore();
  const { step, nextStep, reset, phoneForm, codeForm, finalForm } =
    useAuthPopupCases();

  const handlePhoneSubmit = phoneForm.handleSubmit(data => {
    console.log(data);
    nextStep();
  });

  const handleCodeSubmit = codeForm.handleSubmit(data => {
    console.log(data);
    nextStep();
  });

  const handleFinalSubmit = finalForm.handleSubmit(data => {
    saveTokenStorage('store');
    setUserData({ id: 1, phone: phoneForm.getValues().phone, ...data });
    toggleAuthPopup();
    reset();
  });

  return (
    <Dialog
      open={authPopup}
      onOpenChange={open => {
        toggleAuthPopup();
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
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                placeholder="+7 (999) 999-99-99"
                {...phoneForm.register('phone')}
              />
              {phoneForm.formState.errors.phone && (
                <p className="text-sm text-red-500">
                  {phoneForm.formState.errors.phone.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
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
            <div className="space-y-2">
              <Label htmlFor="code">Код из SMS</Label>
              <Input
                id="code"
                placeholder="Введите код"
                {...codeForm.register('code')}
              />
              {codeForm.formState.errors.code && (
                <p className="text-sm text-red-500">
                  {codeForm.formState.errors.code.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Подтвердить
            </Button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleFinalSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="your@email.com"
                {...finalForm.register('email')}
              />
              {finalForm.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {finalForm.formState.errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Имя</Label>
              <Input
                id="name"
                placeholder="Ваше имя"
                {...finalForm.register('name')}
              />
              {finalForm.formState.errors.name && (
                <p className="text-sm text-red-500">
                  {finalForm.formState.errors.name.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Завершить регистрацию
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
