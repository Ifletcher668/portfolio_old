import React from 'react';
import Services from '../../components/services';
import Layout from '../../components/layout';

const WritingPage: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <Services />
        </Layout>
    );
};

export default WritingPage;
