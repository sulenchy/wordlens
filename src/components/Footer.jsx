import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, LinkedIn, OverlappedEllipse, OverlappedMask, OverlappedRect } from './svgs';

const Footer = ({ isDarkMode }) => {
    return (
        <div className="footer" style={ isDarkMode ? { borderColor: '#122239' } : {} }>
            <div className="main-wrapper">
                <div className='hide-in-small-scr' style={{ width: '30%' }}>
                    <div style={{ height: '200px' }}>
                        <OverlappedEllipse />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '200px'}}>
                        <OverlappedMask id="mask-icon" />
                    </div>
                </div>
                <div className="api-desc-wrapper">
                    <Logo className="hide-in-big-scr" />
                    <h1 className="hide-in-small-scr with-no-bar">Wordlens</h1>
                    <p className="body">The API used to serve this data was provided by dictionaryapi.dev, click on the link below to read more</p>
                    <a className="link" href="#" target="_blank">Visit API documentation</a>
                </div>
                <div className='hide-in-small-scr' style={{ width: '30%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', height: '200px', paddingTop: '20px' }}>
                        <OverlappedRect />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', height: '200px' }}>
                        <OverlappedEllipse />
                    </div>
                </div>
            </div>
            <div className="social-wrapper">
                <Logo className="hide-in-small-scr" />
                <div className="social">
                    <Facebook style={{ width: "19.96px", height: "20px", margin: '0 5px' }} />
                    <Instagram style={{ width: "19.97px", height: "20px", margin: '0 5px' }} />
                    <Twitter style={{ width: "23.96px", height: "19.51px", margin: '0 5px' }} />
                    <LinkedIn style={{ width: "21.96px", height: "22px", margin: '0 5px' }} />
                </div>
                <div className="hide-in-small-scr policy-wrapper">
                    <span>Terms of use.</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <p>Copyright © 2021 Wordlens. All rights reserved.</p>
        </div>
    )
}

export default Footer;