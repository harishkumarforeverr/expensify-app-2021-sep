import React from 'react';
import ReactDOM from "react-dom";


const Info=(props)=>{
    return (
        <div>
         <h4> These is the Info Componenrt </h4>
         <p> my props are : {props.info} </p>
        </div>
    )
}

// const HOC=(WrapperComponent)=>{
//     return (props)=>{
//         return (
//             <div> 
//                 {props.isAdmin && <h1> these is a private messge please dont share with anyone </h1> }
//                 <WrapperComponent {...props} />
//             </div>
//         )
//     }
// }


// const HOComponet=HOC(Info);


const RequireAuthentiaction=(WrapperComponent)=>{
    return (props)=>{
        return (
            <div>
              {props.isAuthenticated?<WrapperComponent {...props}   />: <p> please login to infromation </p>}
            </div>
        )
    }
}


const AuthInfo=RequireAuthentiaction(Info);

// ReactDOM.render(<HOComponet isAdmin={true} info={"harishkuumarforever"} />, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={false} info={"harishkuumarforever"} />, document.getElementById("app"));