import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Services from '../components/services';
import Jobs from '../components/jobs';
import Blogs from '../components/writtenContent';

export default () => {
    return (
        <>
            <div className='overflow-container'>
                <Layout id='index-page'>
                    <Hero />
                </Layout>
            </div>
        </>
    );
};
