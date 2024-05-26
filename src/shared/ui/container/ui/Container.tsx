import clsx from 'clsx';
import { ReactNode } from 'react';
import cls from './Container.module.scss';


interface ContainerProps {
    className?: string;
    children: ReactNode;
}

export const Container = (props: ContainerProps) => {
    const { className, children } = props;
    return (
        <div className={clsx(cls.Container, className)}>
            {children}
        </div>
    );
};
