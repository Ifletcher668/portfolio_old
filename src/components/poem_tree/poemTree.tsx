import React, { Fragment, createContext } from 'react';
import Canvas from './canvas/canvas';
import PoemNode from './poetry_node/poemNode';

const widthAndHeight = {
    width: window.innerWidth,
    height: window.innerHeight,
};

export const poemTreeCanopyContext = createContext(widthAndHeight);
export const PoemTreeProvider = poemTreeCanopyContext.Provider;

const PoemTree: React.FC<IProps> = (props: IProps) => {
    const poems: haiku[] = [
        { line1: 'testing first', line2: 'testing', line3: '1 2 3' },
        { line1: 'testing second', line2: 'testing', line3: '1 2 3' },
        { line1: 'testing third', line2: 'testing', line3: '1 2 3' },
    ];

    return (
        <Fragment>
            <PoemTreeProvider value={widthAndHeight}>
                <Canvas />
                {poems.map((haiku: haiku, idx: number) => (
                    <PoemNode key={idx} poem={haiku} />
                ))}
            </PoemTreeProvider>
        </Fragment>
    );
};

export default PoemTree;

// ! This is the parent component
