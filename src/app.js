import React from 'react';
import ReactDOM from 'react-dom';  
import 'react-dates/initialize';
import AppRouter from "./routers/AppRouter"; 
import configureStore from "./store/configStore";
import { addExpense } from './actions/expenses';
import { Provider } from 'react-redux'; 
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';


// import SelectorExpenses from "./selector/expenses";

import './styles/styles.scss';   


var appRoot=document.getElementById("app");

const store=configureStore();

 
store.subscribe(()=>{
    console.log(store.getState()); 
}) 


store.dispatch(addExpense({description:"Water bill",amount:4500}));
store.dispatch(addExpense({description:"Gas bill",createdAt:1000}));
// store.dispatch(addExpense({description:"Rent",amount:109500,})); 
 

const App=()=>(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<App /> ,  appRoot);

// const now=moment();
// const timeStamp=now.valueOf();
// console.log("now",now);
// console.log("now time ",timeStamp);
// console.log("testing", moment(timeStamp))
