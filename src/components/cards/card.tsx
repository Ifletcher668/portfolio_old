import React from 'react';

interface ICardProps extends IProps {
    children: React.ReactChild;
    // placement: boolean;
    // hover: boolean;
    // margin?: "m-1" | "m-2";
    // padding?: "p-1" | "p-2";
    // center: boolean;
}

// add margin prop
// add padding prop

const Card: React.FC<ICardProps> = (props: ICardProps) => {
    const { children } = props;

    return <></>;
};

export default Card;
