import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SignInForm } from '@/features/SignInForm';
import { QueryProvider } from '@/app/providers/queryProvider';
import { Header } from '@/widgets/header';

export const App = () => (
    <QueryProvider>
        {__IS_DEV__ && <ReactQueryDevtools initialIsOpen={false} />}
        <div className="app dark">
            <Header />
            <SignInForm />
        </div>
    </QueryProvider>

);
