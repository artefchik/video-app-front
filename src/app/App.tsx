import { Input } from '@/shared/ui/Input/Input';
import { useState } from 'react';
import { Container } from '@/shared/ui/Container/Container';
import { SignInForm } from '@/features/SignInForm/ui/SignInForm';

export const App = () => {
    const [value, setValue] = useState('');
    return (
        <div className="app dark">
            <Container>
                <SignInForm />
            </Container>
        </div>
    );
};
