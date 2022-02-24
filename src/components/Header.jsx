import React, { useState } from 'react';
import Logo from './Logo';
import { DarkModeSwitch } from './svgs';

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleClick = () => {
        const root = document.body;
        // toggle the background and color properties of the root here
        if (isDarkMode) {
            root.classList.add('darkMode');
        } else {
            root.classList.remove('darkMode');
        }
        setIsDarkMode(!isDarkMode)
    }
    return (
        <div className="header">
            <Logo />
            <DarkModeSwitch className="dark-mode-switch" isDarkMode={isDarkMode} onClick={handleClick} />
        </div>
    )
}

export default Header;