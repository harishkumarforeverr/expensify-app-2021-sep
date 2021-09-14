import React from "react";
import { connect } from "react-redux";  
import { DateRangePicker } from "react-dates";
import {setTextFilter, sortByAmount,sortByDate} from "../actions/filters";
import {setStartDate,setEndDate } from "../actions/filters";

class ExpenseListFilter extends React.Component{
   constructor(props){
      super(props); 
      this.state={ 
         focusedInput:null
      }
   }
   onDatesChange=({ startDate, endDate })=>{ 
      this.props.dispatch(setStartDate( startDate));
      this.props.dispatch(setEndDate( endDate));
   }
   render(){
        return (
         <div>
          <input type="text" value={this.props.filter.text} onChange={(e)=>{ 
              this.props.dispatch(setTextFilter(e.target.value));
          }}/>
          <select value={this.props.filter.sortBy} onChange={(e)=>{
             if(e.target.value==="amount"){
                this.props.dispatch(sortByAmount());
             }
             else if(e.target.value==="date"){ 
                this.props.dispatch(sortByDate());
             }
          }}>
          <option value="date" > Date </option>
          <option value="amount" > Amount </option>
          </select>
          <DateRangePicker
              startDate={this.props.filter.startDate} // momentPropTypes.momentObj or null,
              startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
              endDate={this.props.filter.endDate} // momentPropTypes.momentObj or null,
              endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
              onDatesChange={this.onDatesChange} //{({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              showClearDates={true}
              numberOfMonths={1} 
              isOutsideRange={()=>false}
           />
  
         </div>
     )
   }
}

const mapStateToProps=(state)=>{
    return  {
     filter:state.filters
    }
}
export default connect(mapStateToProps)(ExpenseListFilter);
