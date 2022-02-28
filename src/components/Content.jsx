import React, { useState, useEffect, useRef } from 'react';
import { Search, Speaker } from './svgs';
import NotFound from './404';
import Skeleton from 'react-loading-skeleton'
import { getDefinitions } from '../api';



const Content = ({ isDarkMode }) => {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [definitions, setDefinitions] = useState(null)
    const displayRef = useRef(null);

    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (keyword) {
            console.dir(keyword);
            setIsLoading(true);
            getDefinitions(keyword).then(response => {
                setDefinitions(response);
                setIsLoading(false)
            })
        }
    }

    const handlePlayPhonetic = () => {
        const audioElem = document.getElementById('audio-elem');
        audioElem['play']();
    }

    useEffect(() => {
        if (!isLoading && definitions && definitions.status == 200) {
            displayRef.current.style.border = isDarkMode ? '1px solid #122239' : '1px solid #E9ECF0';
        } else {
            displayRef.current.style.border = 'none';
        }
    }, [isLoading, isDarkMode])

    return (
        <main className='content-wrapper'>
            <header className='content-header'>
                <h1>Search<br />for any word.</h1>
            </header>
            <section className='display-wrapper'>
                <form className="form" aria-label='search-form'  style={ isDarkMode ? { borderColor: '#122239' } : {}}>
                    <div className='search-wrapper'>
                        <div className='search-icon'>
                            <Search style={{ height: '20px', width: '20px' }} />
                        </div>
                        <input aria-label='search-box' type="search" placeholder='What would you like to search for?' name="search" className='search-input' onChange={ handleChange } style={ isDarkMode ? { color: '#fff' } : {} } />
                    </div>
                    <input aria-label='search-button' type="submit" value="Search" className='search-btn' onClick={ handleSearch } />
                </form>
                <div ref={ displayRef } className='display'>
                    {
                        definitions && definitions.status === 200 &&
                        <>
                            { isLoading ? <Skeleton width={100} height={30} className='pd-10' /> : <h2>{ definitions.data[0].word }</h2> }
                            { isLoading ? <Skeleton width={70} height={10} /> : <div className='phonic-wrapper'>
                                <h5>{ definitions.data[0].phonetics[0].text }</h5>
                                <audio id="audio-elem" preload='none'>
                                    <source src={ definitions.data[0].phonetics[0].audio } type='audio/mpeg' />
                                </audio>
                                <button id="audio-control" onClick={ handlePlayPhonetic } type="submit">
                                    <Speaker style={{ marginLeft: '5px' }} />
                                </button>
                            </div> }
                            <div className='definitions-wrapper'>
                                { isLoading ? <Skeleton /> : <p className='origin'>origin: "early 19th century: variant of earlier hollo ; related to holla.",</p> }
                                <ol className='definitions'>
                                    { isLoading ? <Skeleton count={3} /> : definitions.data[0].meanings.map((meaning, index) => (<li key={index} className='list'>
                                        <p className='exclamation'>{`(${meaning.partOfSpeech}) ${meaning.definitions[0].definition}`}</p>
                                        <p className='sentence'>sentence: “hello there, Katie!"</p>
                                        <p className='synonyms'>Synonyms: “”</p>
                                    </li>)) }
                                </ol>
                            </div>
                        </>
                    }
                    {
                        definitions && definitions.status === 404 && <NotFound setDefinitions={ setDefinitions } setKeyword={ setKeyword } />
                    }
                </div>
            </section>
        </main>
    );
}

export default Content;