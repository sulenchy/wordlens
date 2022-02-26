import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content';

import "./styles.scss";
import 'react-loading-skeleton/dist/skeleton.css'

const app = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>
            <Header isDarkMode={ isDarkMode } setIsDarkMode={ setIsDarkMode } />
            <Content isDarkMode={ isDarkMode } />
            <Footer isDarkMode={ isDarkMode } />
        </>
    )
}

export default app;