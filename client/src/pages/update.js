import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import './SEA.css';

const Update = () => {
    return(
        <div>
            <li className="lb"><Link className='searchbutton' to= "/update/professor">Update Professors</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/update/project">Update Projects</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/update/student">Update Students</Link></li>
            
        </div>
    );
};

export default Update