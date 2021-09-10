import React from "react";
const EditExpensePage=(props)=>{
    console.log(props);
    return (
        <div>
            <p>edit page of  the expensy page :  {props.match.params.id} </p>
        </div>
    )
}

export default EditExpensePage;