import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import clsx from 'clsx';
import cls from './AppNavLink.module.scss';

interface AppNavLinkProps extends NavLinkProps {
    className?: string;
    activeClassName?: string;
}

export const AppNavLink = (props: AppNavLinkProps) => {
    const { className, children,activeClassName, ...otherProps } = props;
    return (
        <NavLink className={({isActive})=>clsx(cls.AppNavLink,  className)} {...otherProps}>
            {children}
        </NavLink>
    );
};
