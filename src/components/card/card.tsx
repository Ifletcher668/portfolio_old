import React, { ReactNode } from "react";

interface ICardProps extends IProps {
    children: ReactNode;
    placement: boolean;
    hover: boolean;
    margin?: "m-1" | "m-2";
    padding?: "p-1" | "p-2";
    center: boolean;
}

// add margin prop
// add padding prop

const Card: React.FC<ICardProps> = (props: ICardProps) => {
    const { children, placement, hover, margin, padding, center } = props;

    let marginStyle = "";
    let paddingStyle = "";

    if (margin === "m-1") {
        marginStyle = "1rem";
    } else if (margin === "m-2") {
        marginStyle = "2rem";
    }
    if (padding === "p-1") {
        paddingStyle = "1rem";
    } else if (padding === "p-2") {
        paddingStyle = "1rem";
    }

    const centerElement = center ? "50%" : "100%";

    const outerDivStyles = {
        margin: marginStyle,
        padding: paddingStyle,
        width: centerElement,
    };

    return (
        <>
            <div style={outerDivStyles}>
                <article
                    className={`card ${placement ? "" : "no-placement"} ${
                        hover ? "" : "no-hover"
                    }`}
                >
                    {children}
                </article>
                ;
            </div>
        </>
    );
};

export default Card;
