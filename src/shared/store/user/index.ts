import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserState = {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  avatar: string | null;
  gender: 'male' | 'female' | null;
  birthdate: string | null;

  setUserId: (value: number | null) => void;
  setUserFirstName: (value: string | null) => void;
  setUserLastName: (value: string | null) => void;
  setUserAvatar: (value: string | null) => void;
  setUserGender: (value: 'male' | 'female' | null) => void;
  setUserBirthdate: (value: string | null) => void;
  setUser: (value: {
    id: number | null;
    firstName?: string | null;
    lastName?: string | null;
    avatar?: string | null;
    gender?: 'male' | 'female' | null;
    birthdate?: string | null;
  }) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    set => ({
      id: null,
      firstName: null,
      lastName: null,
      avatar: null,
      gender: null,
      birthdate: null,

      setUserId: value =>
        set({
          id: value,
        }),
      setUserFirstName: value =>
        set({
          firstName: value,
        }),
      setUserLastName: value =>
        set({
          lastName: value,
        }),
      setUserAvatar: value =>
        set({
          avatar: value,
        }),
      setUserGender: value =>
        set({
          gender: value,
        }),
      setUserBirthdate: value =>
        set({
          birthdate: value,
        }),
      setUser: value => set(value),
      clearUser: () =>
        set({
          id: null,
          firstName: null,
          lastName: null,
          avatar: null,
          gender: null,
          birthdate: null,
        }),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
