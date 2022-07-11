import React from 'react';
import {Link} from 'react-router-dom';
import './NavB.css';

function NavBar(){
    return(
        <div className= 'App-header'>
            <div id='logo'>
        <p>reSearcher</p>
           </div>
        <nav>
            <ul>
            <li><Link className='links' to= "/">Home</Link></li>
            <li><Link className='links' to= "/add">Add</Link></li>
            <li><Link className='links' to= "/search">Search</Link></li>
            <li><Link className='links' to= "/update">Update</Link></li>
            <li><Link className='links' to= "/delete">Delete</Link></li>
            <li><Link className='links' to= "/register">Register</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default NavBar;

//<li><Link to="/about">Home</Link></li>