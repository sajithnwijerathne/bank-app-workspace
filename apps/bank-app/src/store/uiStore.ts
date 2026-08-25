import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {zustandStorage} from './mmkv';

interface UIState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  isFirstLaunch: boolean;
  setFirstLaunch: (isFirstLaunch: boolean) => void;
}

export const useUIStore = create<UIState>()(
  persist(
    set => ({
      theme: 'light',
      setTheme: theme => set({theme}),
      isFirstLaunch: true,
      setFirstLaunch: isFirstLaunch => set({isFirstLaunch}),
    }),
    {
      name: 'ui-storage',
      storage: zustandStorage,
    },
  ),
);
