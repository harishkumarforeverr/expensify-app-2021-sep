import { Link } from 'react-router-dom';
import React from 'react';
const PageNotPage=()=>{
    return (
        <div>
          <h1>404!</h1>           
          <Link to="/">Home</Link>
        </div>
    )
}
export default PageNotPage;