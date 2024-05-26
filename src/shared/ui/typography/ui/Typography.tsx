import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';
import cls from './Typography.module.scss';

type TagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span' | 'p';

type TextAlign = 'start' | 'end' | 'center'

interface TypographyProps {
    className?: string;
    as?: TagType;
    children: ReactNode;
    align?: TextAlign;
}

const alignClasses: Record<TextAlign, string> = {
    start: cls.textStart,
    center: cls.textCenter,
    end: cls.textEnd,
};


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
    const { className, as: Tag = 'p', children, align = 'start' } = props;

    const classes = useMemo(
        () => [
            tagClasses[Tag],
            className,
            alignClasses[align]
        ],
        [Tag, align, className],
    );
    return <Tag className={clsx(classes)}>{children}</Tag>;
};
