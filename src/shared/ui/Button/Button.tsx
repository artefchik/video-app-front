import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

type ButtonTheme = 'primary' | 'outlined' | 'clear'
type ButtonBorderRadius = '8' | '50%'

const ThemeClasses: Record<ButtonTheme, string> = {
    primary: cls.primary,
    outlined: cls.outlined,
    clear: cls.clear,
};


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    borderRadius?: ButtonBorderRadius;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        theme = 'primary',
        ...otherProps
    } = props;

    const classes = useMemo(() => [ThemeClasses[theme]], [theme]);

    return (
        <button
            type="button"
            className={clsx(cls.Button,classes)}
            {...otherProps}
        >
        </button>
    );
};
