import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    error?: string;
}

export const Input = (props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        error,
        label,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className={clsx(cls.inputWrapper, error && cls.error, className)}>
            {!!label && (
                <label
                    htmlFor={label}
                    className={clsx(cls.label, value && cls.labelUp)}
                >
                    {label}
                </label>
            )}
            <input
                id={label}
                className={cls.input}
                onChange={onChangeHandler}
                value={value}
                type={type}
                {...otherProps}
            />
            {!!error && <span className={cls.errorText}>{error}</span>}
        </div>
    );
};
