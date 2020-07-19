import React from 'react';
import Layout from '../components/layout';
import { Title } from '../components/titles';

const contact: React.FC<IProps> = (props: IProps) => {
    return (
        <Layout>
            <section className='contact-page'>
                <article className='contact-form'>
                    <Title title='Get in Touch' />
                    <form>
                        <div className='form-group'>
                            <label htmlFor='name'>Name: </label>
                            <input
                                type='text'
                                name='name'
                                placeholder='name'
                                className='form-control'
                            />
                            <label htmlFor='name'>Email: </label>
                            <input
                                type='text'
                                name='email'
                                placeholder='Email'
                                className='form-control'
                            />
                            <label htmlFor='message'>Message: </label>
                            <textarea
                                name='message'
                                rows={5}
                                placeholder='message'
                                className='form-control'></textarea>
                            <button type='submit' className='submit-btn btn'>
                                Send Message
                            </button>
                        </div>
                    </form>
                </article>
            </section>
        </Layout>
    );
};

export default contact;
