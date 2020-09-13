import React from 'react';
import Services from '../../components/services/services';
import Layout from '../../components/layout/layout';
import SEO from '../../components/SEO/SEO';
import Image from 'gatsby-image';
import { useImageQuery } from '../../graphql/queries/images';

export default (props: IProps) => {
    const { teaImage } = useImageQuery();

    return (
        <Layout>
            <SEO title='Writing Resources' descFor='writingPage' />
            <Image fluid={teaImage.childImageSharp.fluid} style={{ width: '400px', height: '450px' }} className='center' />
            <Services type='writing' title={`My Writing`} />
        </Layout>
    );
};
