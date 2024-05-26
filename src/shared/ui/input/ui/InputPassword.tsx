import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import { Input, InputProps } from './Input';
import { Button } from '@/shared/ui/button';
import { SvgIcon } from '@/shared/ui/svgIcon/SvgIcon';
import cls from './Input.module.scss';
import view from '@/shared/assets/icons/view.svg';


export const InputPassword = forwardRef<HTMLInputElement, InputProps>((props, ref)  => {
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
});
