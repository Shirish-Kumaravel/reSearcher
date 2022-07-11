import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import './SEA.css';

const Search = () => {
    return(
        <div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/professor">Search Professors</Link></li>
            </div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/project">Search Projects</Link></li>
            </div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/student">Search Students</Link></li>
            </div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/registeredstudents">Search Students in Projects</Link></li>
            </div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/registeredprofessors">Search Professors in Projects</Link></li>
            </div>
            <div className='searchdiv'>
            <li className="ls"><Link className='searchb' to= "/search/status">Check Status</Link></li>
            </div>
        </div>
    );
};

export default Search;