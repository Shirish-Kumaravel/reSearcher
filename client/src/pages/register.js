import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';

import './SEA.css';

const Register = () => {
    return(
        <div>
            <li className="lb"><Link className='regbutton' to= "/register/professor">Add a professor to a project</Link></li>
            <li className="lb"><Link className='regbutton' to= "/register/student">Add  a student to a project</Link></li>
            
        </div>
    );
};

export default Register