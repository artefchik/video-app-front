import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import cls from './Button.module.scss';

type ButtonTheme = 'primary' | 'alternative' | 'clear' | 'secondary';
type ButtonBorderRadius = '8' | '50%';

const ThemeClasses: Record<ButtonTheme, string> = {
    primary: cls.primary,
    alternative: cls.alternative,
    secondary: cls.secondary,
    clear: cls.clear,
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    disabled?: boolean;
    borderRadius?: ButtonBorderRadius;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        disabled,
        theme = 'primary',
        ...otherProps
    } = props;

    const classes = useMemo(() => [ThemeClasses[theme]], [theme]);

    return (
        <button
            type="button"
            disabled={disabled}
            className={clsx(cls.Button, classes, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
