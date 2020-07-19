import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

const Error: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
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

export default Error;
