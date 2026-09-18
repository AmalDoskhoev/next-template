import { create } from 'zustand';

import { UserEntity } from '@/shared/model';
import { removeTokenFromStorage } from '@/shared/services';

export interface UserStoreState {
  user: UserEntity | null;
  loading: boolean;

  setUserData: (data: UserEntity) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useUserStore = create<UserStoreState>(set => ({
  user: null,
  loading: false,

  setUserData: (data: UserEntity) => {
    set({ user: data });
  },

  setLoading: (loading: boolean) => {
    set({ loading });
  },

  logout: () => {
    set({ user: null });
    removeTokenFromStorage();
  }
}));
