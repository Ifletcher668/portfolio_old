import React from 'react';
import Services from '../../components/services/services';
import Layout from '../../components/layout/layout';

const MusicPage: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <Services type='music' title={`My Music`} />
        </Layout>
    );
};

export default MusicPage;
