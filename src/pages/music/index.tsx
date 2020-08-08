import React from 'react';
import Services from '../../components/services/services';
import Layout from '../../components/layout/layout';
import SEO from '../../components/SEO/SEO';

export default (props: IProps) => {
    return (
        <Layout>
            <SEO title='Music Resources' />
            <Services type='music' title={`My Music`} />
        </Layout>
    );
};
