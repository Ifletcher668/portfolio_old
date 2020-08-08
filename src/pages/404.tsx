import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import SEO from '../components/SEO/SEO';

export default () => {
    return (
        <Layout>
            <SEO title='Sorry! Page Not Found' />
            <main className='error-page'>
                <div className='error-container'>
                    <h1>I'm sorry, I can't do that right now</h1>
                    <h4>404</h4>
                    <Link to='/' className='btn'>
                        Go Home
                    </Link>
                </div>
            </main>
        </Layout>
    );
};
