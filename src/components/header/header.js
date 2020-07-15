import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';

function Header (){
    return(
    <header>
        <Navbar>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        </Navbar>
    </header>
    )
}

export default Header;