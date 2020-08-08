import React from 'react';
import SocialLinks from '../social_links/socialLinks';
import { Link } from 'gatsby';

const Footer: React.FC<IProps> = (props: IProps) => {
    return (
        <footer className='footer'>
            <SocialLinks className='footer-link' />
            <h3>Site Designed By Isiah Fletcher</h3>
            <h4>copyright&copy;{new Date().getFullYear()}</h4>
            <h6>
                <Link to='/sitemap.xml'>site map</Link>
            </h6>
        </footer>
    );
};

export default Footer;
