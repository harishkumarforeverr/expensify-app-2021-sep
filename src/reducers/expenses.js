
const expenseReducerDefaultState=[];
export default (state=expenseReducerDefaultState,action)=>{
   switch(action.type){ 
       case "ADD_EXPENSE":   
       return [...state,action.expense];
       case "REMOVE_EXPENSE": 
           return state.filter(({id})=>id!==action.id)
       case "EDIT_EXPENSE" : 
            const obj=state.map((expense)=>{  
               if(expense.id===action.id){ 
                   return {
                        ...expense,
                        ...action.expense
                   }
               }
               else{
                   return expense
               }
            })
          return obj;
       default :  
        return state;
   }
}
