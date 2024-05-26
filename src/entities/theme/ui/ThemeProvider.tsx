import { PropsWithChildren, useCallback, useMemo, useState } from 'react';
import { Theme, ThemeContext, ThemeSwitcherContext } from '../config/ThemeContext';
import { useLocalStorage } from '@/shared/lib/hooks/useLocalStorage';
import { LOCAL_STORAGE } from '@/shared/const/localStorage';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [defaultTheme, setDefaultTheme] = useLocalStorage(LOCAL_STORAGE.THEME, Theme.LIGHT);
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const switchTheme = useCallback(() => {
        setTheme((currentTheme) => currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
    }, []);

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeSwitcherContext.Provider value={switchTheme}>
                {children}
            </ThemeSwitcherContext.Provider>
        </ThemeContext.Provider>
    );
};
