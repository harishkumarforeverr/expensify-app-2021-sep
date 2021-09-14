import { createStore,combineReducers } from "redux";
import { v4 as uuidv4 } from 'uuid';
// ADD_EXPENSE
const addExpense=({
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
        amount,
        createdAt
    }
})
// REMOVE_EXPENSE
const removeExpense=({id}={})=>({
    type:"REMOVE_EXPENSE",
    id
})

// EDIT_EXPENSE
const editExpense=({id,amount}={})=>({
    type:"EDIT_EXPENSE",
    id,
    amount
})
// SET_TEXT_FILTER
const setTextFilter=(text="")=>({
   type:"SET_TEXT_FILTER",
   text
})
// SORT_BY_AMOUNT
const sortByAmount=()=>({
    type:"SORT_BY_AMOUNT" 
})
// SORT_BY_DATE
const sortByDate=()=>({
    type:"SORT_BY_DATE"
})
// SET_START_DATE

const setStartDate=(startDate)=>({
    type:"SET_START_DATE",
    startDate
})
// SET_END_DATE
const setEndDate=(endDate)=>({
   type:"SET_END_DATE",
   endDate
}) 


const expenseReducerDefaultState=[];
const expenseReducer=(state=expenseReducerDefaultState,action)=>{
   switch(action.type){ 
       case "ADD_EXPENSE":   
       return [...state,action.expense];
       case "REMOVE_EXPENSE": 
           return state.filter(({id})=>id!==action.id)
       case "EDIT_EXPENSE" :
            return state.map((expense)=>{
               if(expense.id===action.id){
                   return {
                       ...expense,
                       amount:action.amount
                   }
               }
               else{
                   return expense
               }
            })
       default :  
        return state;
   }
}

const filtersReducerDefaultState={
    text:"",
    sortBy:"date",
    startDate:undefined,
    endDate:undefined
};
const filtersReducer=(state=filtersReducerDefaultState,action)=>{
   switch(action.type){
       case "SET_TEXT_FILTER":
           return {
               ...state,
               text:action.text
           }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy:"date"
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy:"amount"
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                endDate:action.endDate
            }
       default :  
        return state;
   }
}

const store=createStore(combineReducers({
    expenses:expenseReducer,
    filters:filtersReducer  
})); 

 
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{ 
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=="number" || expense.createdAt>=startDate;
        const endDateMatch=typeof endDate!=='number' || expense.createdAt<=endDate
        const textMatch= text ? expense.description.toLowerCase().includes(text.toLowerCase()) : true
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy=="date"){ 
            return a.createdAt>b.createdAt?-1:1;
        }
        else if(sortBy=="amount"){
           return a.amount>b.amount ? -1 : 1;
        } 
    });
}

store.subscribe(()=>{
    const state=store.getState();
   const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
})
 

const expenseOne=store.dispatch(addExpense({description:"rent",amount:100,createdAt :1000}));
const expenseTwo=store.dispatch(addExpense({description:"coffee",amount:500,createdAt:-1000})); 
const expenseTwo1=store.dispatch(addExpense({description:"room",amount:300,createdAt:3000})); 

// console.log(expenseOne.expense.id,expenseTwo.expense.id);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
 
// store.dispatch(editExpense({id : expenseTwo.expense.id, amount:500}));

// store.dispatch(setTextFilter("m"));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-500)) 
// store.dispatch(setEndDate())
 

