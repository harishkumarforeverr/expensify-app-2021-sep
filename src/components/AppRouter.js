import React from 'react';
import { BrowserRouter,Route,Switch,Link ,NavLink} from 'react-router-dom';
import AddExpensePage from "./AddExpensePage";
import DashBoardExpensify from "./DashBoardExpensify";
import EditExpensePage from "./EditExpensePage";
import HelpExpensePage from "./HelpExpensePage";
import Header from "./Header";
import PageNotPage from "./PageNotPage";

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