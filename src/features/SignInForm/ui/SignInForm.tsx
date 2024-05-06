import clsx from 'clsx';
import cls from './SignInForm.module.scss';
import { Flex } from '@/shared/ui/Flex/Flex';
import { Controller, useForm } from 'react-hook-form';
import { signInSchema, SignInSchema } from '../model/types/SignInSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/shared/ui/Input/Input';

interface SignInFormProps {
    className?: string;
}

export const SignInForm = (props: SignInFormProps) => {
    const { className } = props;
    const {
        control,
        handleSubmit,
        reset,
        formState: { isDirty, isSubmitting, errors },
    } = useForm<SignInSchema>({
        mode: 'onBlur',
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return (
        <Flex as="form" className={clsx(cls.SignInForm, className)}>
            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <Input
                        label="Email"
                        error={errors.email?.message}
                        {...field}
                    />
                )}
            />
            q
            <Controller
                name="password"
                control={control}
                render={({ field }) => (
                    <Input.Password
                        error={errors.password?.message}
                        {...field}
                    />
                )}
            />
        </Flex>
    );
};
