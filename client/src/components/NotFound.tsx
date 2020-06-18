import React from 'react';
import { RouteComponentProps, Link } from '@reach/router';

interface Props extends RouteComponentProps {}
const PageNotFound: React.FC<Props> = (props: Props) => {
    return (
        <React.Fragment>
            <h1>Page not found</h1>
            <Link to='/'>Home</Link>
        </React.Fragment>
    );
};

export default PageNotFound;
