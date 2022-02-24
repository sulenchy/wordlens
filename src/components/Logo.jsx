import React from 'react';


const Logo = ({ style, className }) => {
    return (
        <div className={`logo-wrapper ${ className }`} style={ style }>
            <hr></hr>
            <h3>Wordlens</h3>
        </div>
    );
};

export default Logo;
