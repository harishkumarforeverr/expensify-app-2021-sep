import React from 'react';
import ReactDOM from 'react-dom'; 
// import 'normalize.css/normalize.css';
// import AppRouter from "./components/AppRouter";
import PortFolio from "./playground/Portfolio";
import './styles/styles.scss';   


var appRoot=document.getElementById("app");

ReactDOM.render(<PortFolio /> ,  appRoot);

 