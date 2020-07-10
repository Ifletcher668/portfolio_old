import React, { useRef, RefObject, useContext, useEffect } from 'react';
import styles from '../poemTree.module.scss';
import { useDraw as useDrawFractalTree } from './useDraw';
import { poemTreeCanopyContext } from '../poemTree';

const Canvas: React.FC = () => {
    const { wrapper } = styles;
    const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
    const { width, height } = useContext(poemTreeCanopyContext);
    useDrawFractalTree(canvasRef, width, height);

    return <canvas className={wrapper} width={width} height={height} ref={canvasRef} />;
};

export default Canvas;

// TODO: Make a Poetry Node component
// TODO: Randomly assign a position on the canvas for the poetry node
// TODO: Try to get the tree to always be a little wider than 1/3 of the page
// TODO: Make sure that page refreshes skip down past the canvas
