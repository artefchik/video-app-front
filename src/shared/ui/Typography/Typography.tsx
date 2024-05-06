import clsx from 'clsx';
import { ReactNode } from 'react';
import cls from './Typography.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';

interface TypographyProps {
    className?: string;
    as?: TagType;
    children: ReactNode;
}

const tagClasses: Record<TagType, string> = {
    h1: cls.h1,
    h2: cls.h2,
    h3: cls.h3,
    h4: cls.h4,
    h5: cls.h5,
    p: cls.p,
    span: cls.span,
};

export const Typography = (props: TypographyProps) => {
    const { className, as: Tag = 'p', children } = props;

    return <Tag className={clsx(tagClasses[Tag], className)}>{children}</Tag>;
};
