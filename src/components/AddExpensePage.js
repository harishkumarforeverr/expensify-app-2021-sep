import React from 'react';
import ExpenseForm from './ExpenseForm';
import {addExpense} from "../actions/expenses";
import { connect } from 'react-redux';

class AddExpensePage extends React.Component{
    onSubmit=(expenses)=>{    
        this.props.dispatch(addExpense(expenses));
        this.props.history.push("/")
    }
    render(){ 
        return (
            <div>
            <p>Add New Expenses </p>
            <ExpenseForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}
 
export default connect()(AddExpensePage);
