import { v4 as uuidv4 } from 'uuid';
// ADD_EXPENSE
export const addExpense=({
        description="",
        note="",
        amount=0,
        createdAt=0
    }={})=>({
    type:"ADD_EXPENSE",
    expense:{
        id:uuidv4(),
        description,
        note,
        amount:Number(amount),
        createdAt
    }
})
// REMOVE_EXPENSE
export const removeExpense=({id}={})=>({
    type:"REMOVE_EXPENSE",
    id
})

// EDIT_EXPENSE
export const editExpense=(expense,id)=>({
    type:"EDIT_EXPENSE", 
    expense,
    id
})