import React from 'react';
import {  NavLink } from 'react-router-dom';
const Header=()=> (
    <div>
     <h1>Expensisy-App ! </h1> 
     <NavLink exact={true} activeClassName="selected" to="/">DashBoard </NavLink>    
     <NavLink activeClassName="selected" to="/create">Create </NavLink>    
     <NavLink activeClassName="selected" to="/help"> Help </NavLink>      ``
    </div>
) 

export default Header;