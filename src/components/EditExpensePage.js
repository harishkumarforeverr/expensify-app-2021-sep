import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
const EditExpensePage=(props)=>{  
    const onSubmit=(expense)=>{  
        props.dispatch(editExpense(expense,props.match.params.id)); 
        props.history.push("/")
    }
    return (
        <div> 
         <ExpenseForm expense={props.expense} onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{   
    return {
       expense:state.expenses.find((expense)=>{
           return expense.id==ownProps.match.params.id
       })
    }
}

export default connect(mapStateToProps)(EditExpensePage);
   
 