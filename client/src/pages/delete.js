import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import './SEA.css';

const Delete = () => {
    return(
        <div>
            <li className="lb"><Link className='searchbutton' to= "/delete/professor">Delete Professors</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/delete/project">Delete Projects</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/delete/student">Delete Students</Link></li>
            
        </div>
    );
};

export default Delete