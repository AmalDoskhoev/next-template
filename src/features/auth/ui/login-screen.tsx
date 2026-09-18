import Image from 'next/image';

import { Typography } from '@/shared/ui';

import { LoginForm } from './login-form';

export function LoginScreen() {
  return (
    <div className="min-h-svh bg-(--white) lg:bg-(--gray-100) lg:p-6">
      <div className="grid min-h-svh lg:min-h-[calc(100svh-3rem)] lg:grid-cols-2 lg:gap-4">
        <div className="relative hidden overflow-hidden rounded-[28px] bg-(--amber-50) lg:block">
          <Image
            src="/brand/login-graphic.png"
            alt=""
            fill
            priority
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center bg-(--white) px-6 py-10 lg:rounded-[28px]">
          <div className="flex w-full max-w-[360px] flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-3">
              <Image
                src="/brand/logo-mark.png"
                alt="Ailam"
                width={44}
                height={44}
                className="size-11 object-contain"
              />
              <Typography variant="h2" component="h1">
                Ailam GOV
              </Typography>
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
