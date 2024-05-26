import { DetailedHTMLProps, HTMLAttributes, ReactNode, useMemo } from 'react';
import clsx from 'clsx';
import cls from './Flex.module.scss';

type FlexJustify = 'center' | 'start' | 'end' | 'between';
type FlexAlign = 'center' | 'start' | 'end' | 'stretch';
type FlexGap = '5' | '10' | '15' | '20' | '25' | '30' | '35';
type FlexDirection = 'row' | 'column' | 'rowReverse';

type DivProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
>;

type TagType = 'div' | 'section' | 'nav' | 'ul' | 'li' | 'form';

export interface FlexProps extends DivProps {
    className?: string;
    children?: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    wrap?: boolean;
    as?: TagType;
}

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
    stretch: cls.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    rowReverse: cls.directionRowReverse,
    column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
    5: cls.gap5,
    10: cls.gap10,
    15: cls.gap15,
    20: cls.gap20,
    25: cls.gap25,
    30: cls.gap30,
    35: cls.gap35,
};

export const Flex = (props: FlexProps) => {
    const {
        children,
        className,
        justify = 'start',
        align = 'stretch',
        direction = 'row',
        gap,
        wrap = false,
        as: Tag = 'div',
    } = props;

    const classes = useMemo(
        () => [
            className,
            justifyClasses[justify],
            alignClasses[align],
            directionClasses[direction],
            gap && gapClasses[gap],
            wrap && wrap,
        ],
        [align, className, direction, gap, justify, wrap],
    );

    return <Tag className={clsx(cls.Flex, classes)}>{children}</Tag>;
};
