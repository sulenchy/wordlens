import React from 'react';
import { Search, Speaker } from './svgs';



const Content = () => {
    return (
        <main className='content-wrapper'>
            <header className='content-header'>
                <h1>Search<br />for any word.</h1>
            </header>
            <section className='display-wrapper'>
                <form className="form">
                    <div className='search-wrapper'>
                        <div className='search-icon'>
                            <Search style={{ height: '20px', width: '20px' }} />
                        </div>
                        <input type="search" placeholder='What would you like to search for?' name="search" className='search-input' />
                    </div>
                    <input type="submit" name="search-btn" value="Search" className='search-btn' />
                </form>
                <div className='display'>
                    <h2>Hello</h2>
                    <div className='phonic-wrapper'>
                        <h5>/həˈləʊ/</h5>
                        <button type="submit">
                            <Speaker style={{ marginLeft: '5px' }} />
                        </button>
                    </div>
                    <div className='definitions-wrapper'>
                        <p className='origin'>origin: "early 19th century: variant of earlier hollo ; related to holla.",</p>
                        <ol className='definitions'>
                            <li className='list'>
                                <p className='exclamation'>(exclamation) used as a greeting or to begin a phone conversation.</p>
                                <p className='sentence'>sentence: “hello there, Katie!"</p>
                                <p className='synonyms'>Synonyms: “”</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Content;