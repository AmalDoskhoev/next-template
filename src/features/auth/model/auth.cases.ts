import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { type LoginFormDTO, loginFormSchema } from '@/shared/constants';

export function useLoginForm() {
  return useForm<LoginFormDTO>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      login: '',
      password: ''
    }
  });
}
