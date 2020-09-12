import React, { useState } from 'react';
import { Header } from '../titles/titles';

// type Submission = {
//     name: string;
//     email: string;
//     message: string;
// };

// type Data = {
//     'form-name': 'contact';
//     'form-data': Submission;
// };

const ContactForm: React.FC<IProps> = (props: IProps) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [showSuccessMessage, setShowSendMessage] = useState<boolean>(false);

    const encode = (data: any) => {
        return Object.keys(data)
            .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
            .join('&');
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            message,
        };

        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formData }),
        }).catch((err) => alert(err));

        setName('');
        setEmail('');
        setMessage('');
        setShowSendMessage(true);
    };

    return (
        <>
            <article className='contact-form'>
                <form name='contact' method='POST' data-netlify='true' onSubmit={handleSubmit}>
                    <input type='hidden' name='form-name' value='contact' /> {/** added for netlify to read form submission data*/}
                    <div className='form-group card no-hover no-placement'>
                        <label htmlFor='name'>Name: </label>
                        <input
                            type='text'
                            name='name'
                            // placeholder='name'
                            className='form-control'
                            value={name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                        />
                        <label htmlFor='name'>Email: </label>
                        <input
                            type='text'
                            name='email'
                            // placeholder='Email'
                            className='form-control'
                            value={email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        />
                        <label htmlFor='message'>Message: </label>
                        <textarea
                            name='message'
                            rows={5}
                            // placeholder='message'
                            className='form-control'
                            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
                            value={message}></textarea>
                        <button type='submit' className='submit-btn btn center'>
                            Send Message
                        </button>
                        {showSuccessMessage && (
                            <Header center value={5} title='Excellent! I appreciate you wanting to connect. I will get back with you shortly!' />
                        )}
                    </div>
                </form>
            </article>
        </>
    );
};

export default ContactForm;
