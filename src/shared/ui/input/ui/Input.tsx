import { forwardRef, InputHTMLAttributes, ReactNode, useState } from 'react';
import clsx from 'clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;


export interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
    after?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        error,
        label,
        after,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={clsx(cls.inputWrapper, error && cls.error, className)}>
            <div className={cls.body}>
                {!!label && (
                    <label
                        htmlFor={label}
                        className={clsx(cls.label, value && cls.labelUp)}
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={label}
                    className={cls.input}
                    onChange={onChangeHandler}
                    value={value}
                    type={type}
                    {...otherProps}
                />
                {after && after}
            </div>
            {!!error && <span className={cls.errorText}>{error}</span>}
        </div>
    );
});
//
