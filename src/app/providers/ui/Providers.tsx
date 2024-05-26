import { PropsWithChildren } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/entities/theme';
import { queryClient } from '../queryProvider';

export const Providers = ({ children }: PropsWithChildren) => (
    <QueryClientProvider client={queryClient}>
        {__IS_DEV__ && <ReactQueryDevtools initialIsOpen={false} />}
        <ThemeProvider>
            {children}
        </ThemeProvider>
    </QueryClientProvider>
);
