import React from 'react';
import { RouteComponentProps, Router, Link } from '@reach/router';
import NavbarItem from '../NavbarItem';
import Home from './pages/Home';
import styles from '../../styles/main.module.scss';
import MusicPage from './pages/Music';
import WritingPage from './pages/Writing';
import ContactPage from './pages/Contact';
import Poem from './pages/Poem';
import StickyHeader from '../StickyHeader';

interface Props extends RouteComponentProps {}
const Main: React.FC<Props> = (props: Props) => {
    const { container } = styles;

    return (
        <React.Fragment>
            {/* <header className={`${container}`}>
                <Link to='/'>
                    <h1>Isiah Fletcher</h1>
                </Link>
                <nav>
                    <NavbarItem to='music' title='Music' />
                    <NavbarItem to='writing' title='Writing' />
                    <NavbarItem to='contact' title='Contact' />
                </nav>
            </header> */}
            <StickyHeader />
            <Router className={`${container}`}>
                <Home path='/' id='welcome-page' classNames={``} />
                <MusicPage path='/music/' />
                <WritingPage path='/writing/*' />
                <ContactPage path='contact' />
            </Router>
            <footer className={`${container}`}>Footer</footer>
            {/* // TODO: Social Icons // TODO: link to developer site // TODO: date // TODO: copyright */}
        </React.Fragment>
    );
};

export default Main;
