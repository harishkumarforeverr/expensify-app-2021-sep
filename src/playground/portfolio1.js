import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio1 =()=>(
    <div>
     <h1> my Work  </h1>
     <p> check out  the following things we have done </p>
     <NavLink to="/portfolio1/one"  >one thing</NavLink>
     <NavLink to="/portfolio1/two" >two thing</NavLink>
    </div>
)
export default Portfolio1;