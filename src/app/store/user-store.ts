import { create } from 'zustand';

import { removeTokenFromStorage } from '@/shared/services';

export interface UserEntity {
  id: number;
  email: string;
  name: string;
  phone: string;
}

export interface UserStoreState {
  user: UserEntity | null;
  authPopup: boolean;
  loading: boolean;

  setUserData: (data: UserEntity) => void;
  setAuthPopup: (open: boolean) => void;
  toggleAuthPopup: () => void;
  logout: () => void;
}

export const useUserStore = create<UserStoreState>((set, get) => ({
  user: null,
  authPopup: false,
  loading: false,

  setUserData: (data: UserEntity) => {
    set({ user: data });
  },

  setAuthPopup: (open: boolean) => {
    set({ authPopup: open });
  },

  toggleAuthPopup: () => {
    set({ authPopup: !get().authPopup });
  },

  logout: () => {
    set({ user: null });
    removeTokenFromStorage();
  }
}));
