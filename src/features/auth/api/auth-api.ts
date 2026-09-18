import { Endpoints, type LoginFormDTO } from '@/shared/constants';
import apiClient from '@/shared/core';
import { LoginResponse } from '@/shared/model';

export async function loginUser(payload: LoginFormDTO): Promise<LoginResponse> {
  return (await apiClient.post<LoginResponse>(Endpoints.AUTH_LOGIN, payload))
    .data;
}
