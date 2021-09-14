import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const DashBoardExpensify=()=>{
    return (
        <div> 
            <ExpenseListFilter />
            <ExpenseList /> 
        </div>
    )
}

export default DashBoardExpensify;