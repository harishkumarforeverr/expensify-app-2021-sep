import { createStore } from "redux"; 

const incrementCount=({increment=1}={})=>({
    increment ,
    type:"INCREMENT"
})

const decrementCount=({decrement=1}={})=>({
    decrement ,
    type:"DECREMENT"
})

const reset=()=>({
  type:"RESET"
})

const set=(count)=>({
  type:"SET",
  count
})
          

const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":  
        return {
           count:state.count+action.increment 
        }
        case "DECREMENT":  
        const decrement = typeof action.decrement === 'number' ? action.decrement : 1; 
        return {
           count : state.count-decrement
        }
        case "RESET": 
        return {
           count : 0
        }
        case "SET" : 
        return {
            count:action.count
        }
        default : return  state
    } 
})

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState()); 
}) 
 
store.dispatch(incrementCount({increment:5}));
store.dispatch(incrementCount());

store.dispatch(reset())

store.dispatch(decrementCount());
store.dispatch(decrementCount({decrement:5}));

store.dispatch(set(101))