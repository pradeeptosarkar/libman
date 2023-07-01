import React from 'react'
import './Stats.css'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import BookIcon from '@material-ui/icons/Book';

function Stats() {
    return (
        <div className='stats'>
            <div className='stats-block'>
                <LocalLibraryIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Members</p>
                <p className='stats-count'>4254</p>
            </div>

            <div className='stats-block'>
                <LibraryBooksIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Total Books</p>
                <p className='stats-count'>23254</p>
            </div>

            <div className='stats-block'>
                <BookIcon className='stats-icon' style={{ fontSize:80 }}/>
                <p className='stats-title'>Reservations</p>
                <p className='stats-count'>1154</p>
            </div>
        </div>
    )
}

export default Stats