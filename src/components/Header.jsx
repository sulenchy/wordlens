import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { DarkModeSwitch } from './svgs';

const Header = ({ isDarkMode, setIsDarkMode }) => {

    useEffect(() => {
        const root = document.body;
        if (isDarkMode) {
            root.classList.add('darkMode');
        } else {
            root.classList.remove('darkMode');
        }
    }, [isDarkMode]);

    return (
        <div className="header" style={ isDarkMode ? { borderColor: '#122239' } : {}}>
            <Logo style={{ marginLeft: '29px' }} />
            <DarkModeSwitch className="dark-mode-switch" isDarkMode={isDarkMode} onClick={() => setIsDarkMode(!isDarkMode)} />
        </div>
    )
}

export default Header;