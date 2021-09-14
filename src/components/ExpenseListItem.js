import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';

 const ExpenseListItem=({description="",amount=0,createdAt=0,id,dispatch})=>{  
    return (
        <div>
        <Link to={`/edit/${id}`}>   
            <h3>{description} </h3>
            <p>  {amount}  -  {createdAt} </p>
            </Link>
            <button onClick={()=>{
            dispatch(removeExpense({id}))
        }} > Remove </button>
        <hr/>
        </div>
    )
} 

export default connect()(ExpenseListItem);