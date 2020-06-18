import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}
const Portfolio: React.FC<Props> = (props: Props) => {
    return <h1>I'm a developer!</h1>;
};

export default Portfolio;
