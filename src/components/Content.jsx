import React, { useState } from 'react';
import { Search, Speaker } from './svgs';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Content = ({ isDarkMode }) => {
    const [keyword, setKeyword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        if (keyword) {
            console.dir(keyword);
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, [1000])
        }
    }

    return (
        <main className='content-wrapper'>
            <header className='content-header'>
                <h1>Search<br />for any word.</h1>
            </header>
            <section className='display-wrapper'>
                <form className="form" style={ isDarkMode ? { borderColor: '#122239' } : {}}>
                    <div className='search-wrapper'>
                        <div className='search-icon'>
                            <Search style={{ height: '20px', width: '20px' }} />
                        </div>
                        <input type="search" placeholder='What would you like to search for?' name="search" className='search-input' onChange={ handleChange } />
                    </div>
                    <input type="submit" value="Search" className='search-btn' onClick={ handleSearch } />
                </form>
                <div className='display' style={ isDarkMode ? { borderColor: '#122239' } : {}}>
                    { isLoading ? <Skeleton width={100} height={30} className='pd-10' /> : <h2>Hello</h2> }
                    { isLoading ? <Skeleton width={70} height={10} /> : <div className='phonic-wrapper'>
                        <h5>/həˈləʊ/</h5>
                        <button type="submit">
                            <Speaker style={{ marginLeft: '5px' }} />
                        </button>
                    </div> }
                    <div className='definitions-wrapper'>
                        { isLoading ? <Skeleton /> : <p className='origin'>origin: "early 19th century: variant of earlier hollo ; related to holla.",</p> }
                        <ol className='definitions'>
                            { isLoading ? <Skeleton count={3} /> : <li className='list'>
                                <p className='exclamation'>(exclamation) used as a greeting or to begin a phone conversation.</p>
                                <p className='sentence'>sentence: “hello there, Katie!"</p>
                                <p className='synonyms'>Synonyms: “”</p>
                            </li> }
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Content;