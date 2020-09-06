import React from 'react';
import Layout from '../components/layout/layout';
import { Header } from '../components/titles/titles';
import SEO from '../components/SEO/SEO';

const contact: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <SEO title='Get in Touch' descFor='contactPage' />
            <section className='content-page gutter'>
                <div className='content-page-inner'>
                    <Header title='Get in Touch' />

                    <article className='contact-form'>
                        <form>
                            <div className='form-group card no-hover no-placement'>
                                <label htmlFor='name'>Name: </label>
                                <input
                                    type='text'
                                    name='name'
                                    // placeholder='name'
                                    className='form-control'
                                />
                                <label htmlFor='name'>Email: </label>
                                <input
                                    type='text'
                                    name='email'
                                    // placeholder='Email'
                                    className='form-control'
                                />
                                <label htmlFor='message'>Message: </label>
                                <textarea
                                    name='message'
                                    rows={5}
                                    // placeholder='message'
                                    className='form-control'></textarea>
                                <button type='submit' className='submit-btn btn center'>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </article>
                </div>
            </section>
        </Layout>
    );
};

export default contact;
