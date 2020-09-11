import React, { ReactNode } from 'react';

interface ICardProps extends IProps {
    children: ReactNode;
    placement: boolean;
    hover: boolean;
}

const Card: React.FC<ICardProps> = (props: ICardProps) => {
    const { children, placement, hover } = props;

    return <article className={`card ${placement ? '' : 'no-placement'} ${hover ? '' : 'no-hover'}`}>{children}</article>;
};

export default Card;
