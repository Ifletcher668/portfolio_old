import React, { useState } from 'react';
import { useInterval } from './custom_hooks/useInterval';

interface Props {
    classNames: string;
    adjectives: string[];
}
export const RotatingWords: React.FC<Props> = (props: Props) => {
    const { classNames, adjectives } = props;

    const [adjective, setAdjective] = useState<string>(adjectives[0]);
    const [idx, setIdx] = useState<number>(0);

    useInterval(() => {
        const nextWordInList = adjectives[idx];
        setAdjective(nextWordInList);
        if (idx === adjectives.length - 1) setIdx(0);
        else setIdx(idx + 1);
    }, 1500); // TODO this needs work

    return <button className={classNames}> {adjective}</button>;
};
