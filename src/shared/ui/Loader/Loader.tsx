import clsx from 'clsx';
import { CSSProperties } from 'react';
import cls from './Loader.module.scss';


interface LoaderProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    borderWidth?: number;

}

export const Loader = (props: LoaderProps) => {
    const {
        className,
        width = 20,
        height = 20,
        borderWidth,
    } = props;
    const styles: CSSProperties = {
        width,
        height,
        borderWidth,
    };
    return (
        <div className={clsx(cls.Loader, className && className)} />
    );
};
