import React from 'react';
import { RouteComponentProps } from '@reach/router';
// import ContactMeForm from '../ContactMeForm';

interface Props extends RouteComponentProps {}
const ContactPage: React.FC<Props> = (props: Props) => {
    return <section id='contact-page'>{/* <ContactMeForm /> */}</section>;
};

export default ContactPage;
