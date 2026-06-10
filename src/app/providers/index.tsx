'use client';

import { composeProviders } from '@/shared/utils';

import { withTheme } from './with-theme';
import { WithToaster } from './with-toaster';

export const WithProviders = composeProviders([withTheme, WithToaster]);
