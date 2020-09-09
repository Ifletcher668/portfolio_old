import React from 'react';
import { Button, Form, FormField, TextArea, TextInput } from 'grommet';
import Card from '../card/index';

const ContactForm: React.FC<IProps> = (props: IProps) => {
    return (
        <Card>
            <Form onSubmit={({ value }) => console.log('Submit: ', value)}>
                <FormField name='name' label='Name' required={true} component={TextInput} />
                <FormField name='email' label='Email' component={TextInput} />
                <FormField name='message' label='Message' component={TextArea} pad={true} />
                <Button type='submit' label='Submit' primary={true} />
            </Form>
        </Card>
    );
};

export default ContactForm;
