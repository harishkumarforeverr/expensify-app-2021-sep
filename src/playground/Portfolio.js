import React from 'react';
import Header from "./Header"; 
import { BrowserRouter ,Route } from 'react-router-dom';
import Contact from './contact';
import Home from './Home';
import Portfolio1 from './portfolio1';
import Portfolio2 from './portfolio2';
const PortFolio=()=>{
    return (
        <BrowserRouter>
            <div> 
                <h1> Portfolio </h1>
                <Header />
                <Route component={Home} path="/" exact={true} />
                <Route component={Contact} path="/contact" />
                <Route component={Portfolio1} path="/portfolio1" exact={true} />
                <Route component={Portfolio2} path="/portfolio1/:id" />
            </div>
        </BrowserRouter>
    )
}

export default PortFolio;