'use client';

import { composeProviders } from '@/shared/utils';

import { WithQueryClient } from './with-query-client';
import { WithToaster } from './with-toaster';
import { WithTooltip } from './with-tooltip';

export const WithProviders = composeProviders([
  WithQueryClient,
  WithTooltip,
  WithToaster
]);
