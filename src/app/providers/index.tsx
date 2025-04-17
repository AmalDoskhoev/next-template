'use client';

import { composeProviders } from '@/shared/utils';
import { withTheme } from './with-theme';

export const WithProviders = composeProviders([withTheme]);
