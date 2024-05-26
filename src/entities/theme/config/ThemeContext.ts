import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export type ThemeContextProps = Theme | undefined
export type ThemeSwitcherContextProps = ((theme: Theme) => void) | undefined;

export const ThemeContext = createContext<ThemeContextProps>(undefined);
export const ThemeSwitcherContext = createContext<ThemeSwitcherContextProps>(undefined);
