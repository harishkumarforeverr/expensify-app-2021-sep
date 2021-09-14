import React from 'react';
import { connect } from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem';
import SelectedExpenses from "../selector/expenses";

const ExpenseList=(props)=>{
    return (
        <div>   
        {props.expenses.map((expense)=>{
            return <ExpenseListItem  {...expense} key={expense.id} />

        })}
        </div>
    )
}


const mapStateToProps= (state)=>{
    return {
        expenses:SelectedExpenses(state.expenses,state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList)
 