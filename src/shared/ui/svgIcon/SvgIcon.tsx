import clsx from 'clsx';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SvgIcon = (props: SvgIconProps) => {
    const { className, Svg, ...otherProps } = props;

    return <Svg className={clsx()} {...otherProps} />;
};
