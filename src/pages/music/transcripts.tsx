import React from 'react';
import Layout from '../../components/layout/layout';
import SEO from '../../components/SEO/SEO';

export default (props: IProps) => {
    return (
        <Layout>
            <SEO title='Drum Transcripts' descFor='transcriptsPage' />
            <div className='content-page gutter'>
                <div className='content-page-inner'>
                    <article className='title'>
                        <h1>No Transcripts Available At This Time</h1>
                    </article>
                </div>
            </div>
        </Layout>
    );
};
