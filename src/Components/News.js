import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Competitions</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Competion-1</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-2</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-3</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-4</p>
                            </div>
                        <div className='news-competition-event'>
                            <p>Competion-5</p>
                            
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Latest News</h1>
                    <div>
                        <div className='news-news-event'>
                            <p>News-1</p>
                                </div>
                        <div className='news-news-event'>
                            <p>News-2</p>
                                </div>
                        <div className='news-news-event'>
                            <p>News-3</p>
                            </div>
                        <div className='news-news-event'>
                            <p>News-4</p>
                            </div>
                        <div className='news-news-event'>
                            <p>News-5</p>
                            </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Publications</h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Paper-1</p>
                            </div>
                        <div className='news-quiz-event'>
                            <p>Paper-2</p>
                            </div>
                        <div className='news-quiz-event'>
                            <p>Paper-3</p>
                            </div>
                        <div className='news-quiz-event'>
                            <p>Paper-4</p>
                            </div>
                        <div className='news-quiz-event'>
                            <p>Paper-5</p>
                            </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
