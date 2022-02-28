import React from 'react';

const NotFound = ({ setDefinitions, message }) => {
    const handleButtonClick = () => {
        setDefinitions(null);
    }
    
    return (<section className='not-found-wrapper'>
        <p>{message}</p>
        <h1>404</h1>
        <h4>no be juju be that</h4>
        <button aria-label='take-me-home-button' onClick={ handleButtonClick }>Take me home</button>
    </section>);
};

export default NotFound;