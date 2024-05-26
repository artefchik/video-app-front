import { useContext } from 'react';
import { ThemeContext, ThemeSwitcherContext } from '../config/ThemeContext';

export const useTheme = ()=> useContext(ThemeContext)
export const useThemeSwitcher= ()=> useContext(ThemeSwitcherContext)