import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link } from '@reach/router';
import NavbarItem from './NavbarItem';
import styles from '../styles/stickyHeader.module.scss';
import containerStyle from '../styles/main.module.scss';

interface Props {}
const StickyHeader: React.FC<Props> = (props: Props) => {
    const { sticky, stickyWrapper, stickyInner, container, navbar, siteHeader } = styles;
    const [isSticky, setIsSticky] = useState<boolean>(false);

    const ref = useRef<HTMLHeadingElement>(null);

    const handleScroll: () => void = () => {
        const current = ref.current;
        if (current) {
            // will equate to false if header is at the top
            const atTop: boolean = current.getBoundingClientRect().top < 0;
            // will equate to false if below min width of 768 px
            const minWidth: boolean = current.getBoundingClientRect().width >= 768;

            // true only if both conditions are met
            setIsSticky(atTop && minWidth);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', () => handleScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleScroll);
        return () => window.removeEventListener('resize', () => handleScroll);
    }, []);

    return (
        <Fragment>
            {isSticky ? (
                <header
                    className={`${container} ${stickyWrapper} ${isSticky ? sticky : ''}`}
                    ref={ref}>
                    <div className={`${stickyInner} ${container}`}>
                        <Link className={siteHeader} to='/'>
                            <h1>Isiah Fletcher</h1>
                        </Link>
                        <nav className={`${navbar} `}>
                            <NavbarItem to='music' title='Music' />
                            <NavbarItem to='writing' title='Writing' />
                            <NavbarItem to='contact' title='Contact' />
                        </nav>
                    </div>
                </header>
            ) : (
                <header className={`${container}`} ref={ref}>
                    <Link className={siteHeader} to='/'>
                        <h1>Isiah Fletcher</h1>
                    </Link>
                    <nav className={navbar}>
                        <NavbarItem to='music' title='Music' />
                        <NavbarItem to='writing' title='Writing' />
                        <NavbarItem to='contact' title='Contact' />
                    </nav>
                </header>
            )}
        </Fragment>
    );
};

export default StickyHeader;
