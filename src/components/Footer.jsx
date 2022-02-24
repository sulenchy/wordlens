import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, LinkedIn } from './svgs';

const Footer = () => {
    return (
        <div className="footer">
            <div className="api-desc-wrapper">
                <Logo />
                <p className="body">The API used to serve this data was provided by dictionaryapi.dev, click on the link below to read more</p>
                <a className="link" href="#" target="_blank">Visit API documentation</a>
            </div>
            <div className="social-wrapper">
                <Logo className="hide-in-small-scr" />
                <div className="social">
                    <Facebook style={{ width: "19.96px", height: "20px", margin: '0 5px' }} />
                    <Instagram style={{ width: "19.97px", height: "20px", margin: '0 5px' }} />
                    <Twitter style={{ width: "23.96px", height: "19.51px", margin: '0 5px' }} />
                    <LinkedIn style={{ width: "21.96px", height: "22px", margin: '0 5px' }} />
                </div>
                <div className="hide-in-small-scr">
                    <span>Terms of use.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <p>Copyright © 2021 Wordlens. All rights reserved.</p>
        </div>
    )
}

export default Footer;