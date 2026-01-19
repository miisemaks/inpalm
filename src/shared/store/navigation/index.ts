import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from 'shared/types/navigation';

type NavigationState = {
  initialScreen: keyof RootStackParamList | null;
  setInitialScreen: (value: keyof RootStackParamList) => void;
};

export const useNavigationStore = create<NavigationState>()(
  persist(
    set => ({
      initialScreen: null,
      setInitialScreen: value =>
        set({
          initialScreen: value,
        }),
    }),
    {
      name: 'navigation',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
