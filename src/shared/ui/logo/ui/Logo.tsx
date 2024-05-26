import { Link } from 'react-router-dom';
import clsx from 'clsx';
import cls from './Logo.module.scss';
import { getRoutePathMain } from '@/shared/const/router';

interface LogoProps {
    className?: string;
}

export const Logo = ({className}:LogoProps) => (
        <Link to={getRoutePathMain()} className={clsx(cls.logo,className)} />
    );
