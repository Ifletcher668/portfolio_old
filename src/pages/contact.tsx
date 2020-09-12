import React from 'react';
import Layout from '../components/layout/layout';
import { Header } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';
import ContactForm from '../components/contact_form/index';

const contact: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <SEO title='Get in Touch' descFor='contactPage' />
            <section className='content-page gutter'>
                <div className='content-page-inner'>
                    <Header title='Get in Touch' center={false} value={1} />
                    <ContactForm />
                </div>
            </section>
        </Layout>
    );
};

export default contact;
