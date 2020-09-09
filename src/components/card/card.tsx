import React from 'react';
import { FormField, Box, Grid, TextInput } from 'grommet';
import { Link } from 'gatsby';

const Field = () => (
    <SandboxComponent pad='none'>
        <FormField label='Name'>
            <TextInput />
        </FormField>
    </SandboxComponent>
);

const SandboxComponent = (props: any) => (
    <Grid>
        <Box align='start' background='#fff'>
            {props.children}
        </Box>
    </Grid>
);

const Card: React.FC<IProps> = (props: IProps) => {
    const handleForm = (e: Event) => {
        return console.log('Hi');
    };

    return (
        <>
            <SandboxComponent />
        </>
    );
};

export default Card;
