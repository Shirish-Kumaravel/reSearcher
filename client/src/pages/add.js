import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import './SEA.css';

const Add = () => {
    return(
        <div>
            <li className="lb"><Link className='searchbutton' to= "/add/professor">Add Professor</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/add/project">Add Project</Link></li>
            <li className="lb"><Link className='searchbutton' to= "/add/student">Add Student</Link></li>
            
        </div>
    );
};

export default Add;