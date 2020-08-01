import React from 'react';
import SocialLinks from '../../constants/socialLinks';

const Footer: React.FC<IProps> = (props: IProps) => {
    return (
        <footer className='footer'>
            <SocialLinks className='footer-link' />
            <h3>Site Designed By Isiah Fletcher</h3>
            <h4>copyright&copy;{new Date().getFullYear()}</h4>
        </footer>
    );
};

export default Footer;
