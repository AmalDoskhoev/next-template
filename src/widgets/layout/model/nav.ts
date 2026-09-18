import type { LucideIcon } from 'lucide-react';
import { IdCardIcon } from 'lucide-react';

import { routes } from '@/shared/constants';

export type AppNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export const APP_NAV_ITEMS: AppNavItem[] = [
  {
    href: routes.home,
    label: 'Цифровой паспорт',
    icon: IdCardIcon
  }
];
