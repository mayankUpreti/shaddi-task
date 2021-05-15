import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Home from '../containers/Home/Home';
import Login from "../containers/Login/Login";

const Routes=()=>{
    return(
        <Switch>
        <Route exact path="/">
        <Redirect to="/login" />
        </Route>
            <Route exact path='/login' render={(props)=>
        !localStorage.getItem('token')?(<Login {...props} />):<Redirect to='/home'/>
        }/>
        <Route exact path='/home' render={(props)=>
        localStorage.getItem('token')?(<Home {...props} />):<Redirect to='/login'/>
        }/>
        </Switch>
    )
}


export default Routes