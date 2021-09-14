import React from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import AddExpensePage from "../components/AddExpensePage";
import DashBoardExpensify from "../components/DashBoardExpensify";
import EditExpensePage from "../components/EditExpensePage";
import HelpExpensePage from "../components/HelpExpensePage";
import Header from "../components/Header";
import PageNotPage from "../components/PageNotPage";

const AppRouter=()=>( 
      <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashBoardExpensify}  exact ={true}/>
                <Route path="/create" component={AddExpensePage}  /> 
                <Route path="/edit/:id" component={EditExpensePage}  /> 
                <Route path="/help" component={HelpExpensePage}  /> 
                <Route  component={PageNotPage}  />  
            </Switch>
        </div>
      </BrowserRouter> 
);


export default AppRouter;