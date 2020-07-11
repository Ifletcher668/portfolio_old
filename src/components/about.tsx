import React from 'react';

const About: React.FC<IProps> = (props: IProps) => {
    return (
        <>
            <h1>I'm Isiah</h1>
            <h4>I'm:</h4>
            <h4>
                <span>A drummer.</span> A timekeeper. A poet. A lyricist. The co-founder of a band,
                Aterrima. A software connoisseur. An amateur audio engineer. A gamer. A hiker. A
                bicyclist. A somewhere-between-a-taoist-and-buddhist. A graduate of the University
                of Idaho. A graduate of the Coding Dojo. A web developer. On Instagram
                <a href='https://www.instagram.com/fletchmydrumsticks/?hl=en' target='_blank'>
                    {' '}
                    here.
                </a>{' '}
                On Facebook{' '}
                <a href='https://www.facebook.com/fletchmydrumsticks' target='_blank'>
                    here.
                </a>{' '}
                On Github{' '}
                <a href='https://github.com/Ifletcher668?tab=repositories' target='_blank'>
                    {' '}
                    here.
                </a>{' '}
            </h4>
        </>
    );
};

export default About;
