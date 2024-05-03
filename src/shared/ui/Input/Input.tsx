import { InputHTMLAttributes, ReactNode, useState } from 'react';
import clsx from 'clsx';
import cls from './Input.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { SvgIcon } from '@/shared/ui/SvgIcon/SvgIcon';
import view from '@/shared/assets/icons/view.svg';

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

export const Input = (props: InputProps) => {
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
            {after && after}
            {!!error && <span className={cls.errorText}>{error}</span>}
        </div>
    );
};

Input.Password = function InputPassword(props: InputProps) {
    const [isShowPassword, setIsShowPassword] = useState(true);

    const onClickHandler = () => {
        setIsShowPassword((prevState) => !prevState);
    };

    return (
        <Input
            {...props}
            label="Password"
            type={isShowPassword ? 'password' : 'text'}
            after={
                <Button
                    theme="clear"
                    onClick={onClickHandler}
                    className={clsx(cls.password, isShowPassword && cls.view)}
                >
                    <SvgIcon Svg={view} />
                </Button>
            }
        />
    );
};
