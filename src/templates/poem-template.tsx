import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';

const ComponentName: React.FC<IProps> = (props: IProps) => {
    return <h2>poem template</h2>;
};

export const query = graphql`
    query GetSinglePoem($slug: String) {
        poem: strapiPoems(slug: { eq: $slug }) {
            slug
        }
    }
`;

export default ComponentName;
