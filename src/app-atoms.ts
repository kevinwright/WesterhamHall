import { atom } from 'recoil';
import { RoomProps } from './rooms';

export type ThemeMode = 'light' | 'dark';

export const appThemeMode = atom<ThemeMode>({
  key: 'AppThemeMode',
  default: 'light',
});

export const selectedRoom = atom<RoomProps | null>({
  key: 'AppSelectedRoom',
  default: null,
});