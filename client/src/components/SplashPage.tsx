import React, { useState } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
import { RotatingWords } from './RotatingWords';
import { FetchImage as ImgFromDatabase } from './FetchImage';
import styles from '../styles/splashPage.module.scss';

interface Props extends RouteComponentProps {}
const SplashPage: React.FC<Props> = (props: Props) => {
    const [toggleHideProfessionalImage, setToggleHideProfessionalImage] = useState<string>('hide');
    const [toggleHidePersonalImage, setToggleHidePersonalImage] = useState<string>('hide');

    const adjectives = [
        'a drummer',
        'an explorer',
        'a dreamer',
        'a poet',
        'a friend',
        'an amateur guitarist',
        'a hiker',
        'a writer',
        'a musician',
        'a software connoisseur',
        'a traveller',
        'a learner',
        'a gamer',
        'a bicyclist',
        'slightly afraid the world will be overtaken by robots',
    ];

    const { sentenceFragment, boxLink, container } = styles;

    return (
        <React.Fragment>
            <section id='splash-page-introduction' className={container}>
                <div className={sentenceFragment}>
                    <h1>My name is Isiah Fletcher.</h1>
                </div>
                <div
                    id='link-to-developer-portfolio'
                    className={`link ${sentenceFragment}`}
                    onClick={() =>
                        setToggleHideProfessionalImage(
                            toggleHideProfessionalImage === '' ? 'hide' : ''
                        )
                    }>
                    <h2 className='sentence-link'>I'm a Web Developer.</h2>
                </div>
                <div className={sentenceFragment}>
                    <h2>But I'm more than just that. I'm also</h2>
                </div>
                <div
                    id='link-to-personal-portfolio'
                    className={`link ${sentenceFragment}`}
                    onClick={() =>
                        setToggleHidePersonalImage(toggleHidePersonalImage === '' ? 'hide' : '')
                    }>
                    <RotatingWords classNames='link btn-subterfuge' adjectives={adjectives} />
                </div>
            </section>
            <section id='splash-page-links' className={container}>
                <div className={`${toggleHideProfessionalImage} ${boxLink}`}>
                    <h2>View my Resume</h2>

                    <ImgFromDatabase id='10' altText='hello' width={350} height={500} />
                </div>
                <div className={`${toggleHidePersonalImage} ${boxLink} `}>
                    <Link to='/' id='link-to-personal'>
                        <h2>Check out my portfolio</h2>

                        <ImgFromDatabase id='11' altText='hello' width={500} height={350} />
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
};

export default SplashPage;
