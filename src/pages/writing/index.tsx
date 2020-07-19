import React from 'react';
import Services from '../../components/services';
import Layout from '../../components/layout';

export default (props: IProps) => {
    return (
        <Layout>
            <Services type='writing' title={`My Writing`} />
        </Layout>
    );
};
