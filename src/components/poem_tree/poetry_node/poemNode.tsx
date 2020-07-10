import React, { useEffect, useState, Fragment, RefObject, useRef, useContext } from 'react';
import styles from '../poemTree.module.scss';
import { poemTreeCanopyContext } from '../poemTree';

const PoemNode: React.FC<IPoemNode> = (props: IPoemNode) => {
    const { childOverlay, node } = styles;
    const { poem } = props;
    const { width, height } = useContext(poemTreeCanopyContext);
    const poemRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
    const [nodePosition, setNodePosition] = useState<poemNodePositionStyles>({
        top: 0,
        left: 0,
    });

    useEffect(() => {
        const curr = poemRef.current;
        if (curr) {
            const nextElementTop = parseInt(curr.nextElementSibling.style.top);
            const currentTop = parseInt(curr.style.top);
            if (
                (nextElementTop > currentTop && nextElementTop < currentTop + 50) ||
                (nextElementTop < currentTop && nextElementTop > currentTop - 50)
            ) {
                console.log(`top too close!`);
            }

            const nextElementLeft = parseInt(curr.nextElementSibling.style.left);
            const currentLeft = parseInt(curr.style.left);
            if (
                (nextElementLeft > currentLeft && nextElementLeft < currentLeft + 50) ||
                (nextElementLeft < currentLeft && nextElementLeft > currentLeft - 50)
            ) {
                console.log(`left too close!`);
            }
        }
    }, [nodePosition]);

    const randomPositionTop = () => {
        let randomValue: number = height - Math.random() * height;
        while (randomValue > 660) {
            randomValue = height - Math.random() * height;
        }
        // pixel value must be less than 780 to stay on page
        return randomValue;
    };

    const randomPositionLeft = () => {
        const coinFlip: boolean = Math.random() < 0.5;

        const offSetValue = Math.random() * 100 + 100;

        return coinFlip ? width / 2 + offSetValue : width / 2 - offSetValue;
        // grab a random value +- entire width of tree.
    };

    useEffect(() => {
        const randomLeft = randomPositionLeft();
        const randomTop = randomPositionTop();
        setNodePosition({ top: randomTop, left: randomLeft });
    }, []);

    // TODO: Optimize width and height
    // TODO: Can I make this faster?
    return (
        <div className={`${childOverlay}`} style={nodePosition} ref={poemRef}>
            <p className={node}>{poem.line1}</p>
            <p className={node}>{poem.line2}</p>
            <p className={node}>{poem.line3}</p>
        </div>
    );
};

export default PoemNode;
