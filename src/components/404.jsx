import React from 'react';

const NotFound = ({ setDefinitions, setKeyword }) => {
    const handleButtonClick = () => {
        setKeyword('');
        setDefinitions(null);
    }
    
    return (<section className='not-found-wrapper'>
        <p>Oops, Sorry pal, we couldn't find definitions 
for the word you were looking for.</p>
        <h1>404</h1>
        <h4>no be juju be that</h4>
        <button aria-label='take-me-home-button' onClick={ handleButtonClick }>Take me home</button>
    </section>);
};

export default NotFound;