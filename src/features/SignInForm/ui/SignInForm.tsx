import clsx from 'clsx';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Flex } from '@/shared/ui/flex/ui/Flex';
import { signInSchema, SignInSchema } from '../model/types/SignInSchema';
import { Input } from '@/shared/ui/input/ui/Input';
import cls from './SignInForm.module.scss';
import { Button } from '@/shared/ui/button/ui/Button';
import { Typography } from '@/shared/ui/typography/ui/Typography';

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

        <Flex direction="column" gap="15" as="form"
              className={clsx(cls.SignInForm, className)}>

            <Typography  as="h2" align='center'>
                Sign In
            </Typography>
            <Flex direction='column' gap="20">
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
                <Button>Sign In</Button>
            </Flex>
        </Flex>
    );
};
