import React from 'react';
import Services from '../../components/services';
import Layout from '../../components/layout';

const MusicPage: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <Services />
        </Layout>
    );
};

export default MusicPage;
