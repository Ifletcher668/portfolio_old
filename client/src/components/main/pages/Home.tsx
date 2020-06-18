import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    id?: string;
    classNames?: string;
}
const Home: React.FC<Props> = (props: Props) => {
    const { id, classNames } = props;
    return (
        <React.Fragment>
            <h1>Homepage</h1>
            <p>This is where pictures, instagram stuff, links, and whatnot will go</p>
            <h3>
                Isiah is: a drummer, a timekeeper, a poet, a lyricist, a poor excuse for a
                guitarist, the co-founder of a band, Aterrima, a web developer, a software
                connoisseur, an amateur audio engineer; in his offtime, a gamer, a hiker, bicyclist,
                and somewhere-between-a-taoist-and-buddhist; a graduate of the University of Idaho,
                and certified in web development by the Coding Dojo; the product of an exceptional
                network of family, friends, mentors, and educators; on facebook, on Instagram.{' '}
            </h3>
        </React.Fragment>
    );
};

export default Home;
