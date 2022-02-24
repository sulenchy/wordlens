import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

import "./styles.scss";

const app = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <>
            <Header isDarkMode={ isDarkMode } setIsDarkMode={ setIsDarkMode } />
            <h2>Content shows here</h2>
            <Footer />
        </>
    )
}

export default app;