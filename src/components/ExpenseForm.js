import React from 'react'; 
import moment from "moment";
import {SingleDatePicker} from "react-dates";
  
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);   
        this.state={
            description:props.expense?props.expense.description:"",
            amount:props.expense?props.expense.amount:"",
            note:props.expense?props.expense.note:"" ,
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            focused:false,
            error:undefined
        }
    }
   createdAtFunction_of_singleDatePicker=(createdAt)=>{
    if(createdAt){
        this.setState({ createdAt })
    }
   }
   onDescriptionChange=(e)=>{
    const description=e.target.value;
      this.setState(()=>({
          description
      }))
   }
   onAmountChange=(e)=>{
    const amount=e.target.value; 
    if( !amount || amount.match(/^\d*(\.\d{0,2})?$/)){   
      this.setState(()=>({
        amount 
    }))
    }
   }
   onNoteChange=(e)=>{
       const note=e.target.value
      this.setState(()=>({
          note 
      }))
   }

   onSubmit=(e)=>{
       e.preventDefault();
       if(this.state.description && this.state.amount && this.state.createdAt){
           this.setState(()=>({ error : undefined}))
            this.props.onSubmit({
                description:this.state.description,
                amount:this.state.amount,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            })
       }
       else{
        this.setState(()=>({ error : "please provide amount and description ? "})) 
       }
   }
  
   render(){
       return (
           <div>
             {this.state.error && <p>{this.state.error}</p>} 
             <form>
                <input
                 type="text" 
                 placeholder="description" 
                 onChange={this.onDescriptionChange}
                 value={this.state.description}
                 />
                <input 
                 type="text" 
                 value={this.state.amount}
                 placeholder="amount" 
                 onChange={this.onAmountChange}
                 value={this.state.amount}
                 /> 
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.createdAtFunction_of_singleDatePicker} // PropTypes.func.isRequired
                    focused={this.state.focused} // PropTypes.bool
                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                    id="your_unique_id" // PropTypes.string.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                />   
                <textarea
                    placeholder="please add a note (Optional)"
                    onChange={this.onNoteChange}
                    value={this.state.note}
                    >
                </textarea>
                <button onClick={this.onSubmit}>
                Submit
                </button>
             </form>
           </div>
       )
   }
}