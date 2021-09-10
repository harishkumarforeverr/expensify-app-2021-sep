import React from 'react';
import { NavLink } from 'react-router-dom';

const Header=()=>{
    return ( 
        <div>
            <NavLink exact={true} activeClassName="selected" to="/">Home</NavLink>
            <NavLink exact={true} activeClassName="selected" to="/portfolio1">portfolio</NavLink>
            <NavLink activeClassName="selected" to="/contact">contact</NavLink>
        </div>
    )
}

export default Header;