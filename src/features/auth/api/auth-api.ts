import { Endpoints } from '@/shared/constants';
import apiClient from '@/shared/core';
import { UserEntity } from '@/shared/model';

export type RequestCodePayload = {
  phone: string;
};

export type RequestCodeResponse = {
  message: string;
};

export type VerifyCodePayload = {
  phone: string;
  code: string;
};

export type VerifyCodeResponse = {
  message: string;
  verified: boolean;
};

export type RegisterPayload = {
  phone: string;
  email: string;
  name: string;
};

export type RegisterResponse = {
  message: string;
  token: string;
  user: UserEntity;
};

/** Пример запроса SMS-кода через axios + Endpoints.AUTH_LOGIN */
export async function requestAuthCode(payload: RequestCodePayload) {
  return (
    await apiClient.post<RequestCodeResponse>(Endpoints.AUTH_LOGIN, payload)
  ).data;
}

/** Пример проверки кода через axios + Endpoints.AUTH_LOGIN */
export async function verifyAuthCode(payload: VerifyCodePayload) {
  return (
    await apiClient.post<VerifyCodeResponse>(Endpoints.AUTH_LOGIN, payload)
  ).data;
}

/** Пример регистрации через axios + Endpoints.AUTH_REGISTER */
export async function registerUser(payload: RegisterPayload) {
  return (
    await apiClient.post<RegisterResponse>(Endpoints.AUTH_REGISTER, payload)
  ).data;
}
