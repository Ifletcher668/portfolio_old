import React from 'react';
import Services from '../components/Services';
import Layout from '../components/Layout';

const MusicPage: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <Services />
        </Layout>
    );
};

export default MusicPage;
