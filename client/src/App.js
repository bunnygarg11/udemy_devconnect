import React, {Fragment,useEffect}from 'react';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import Landing from "./components/layout/Landing"
import Alert from "./components/layout/alert"
import Login from "./components/Auth/Login"
import Dashboard from "./components/dashboard/DashBoard"
import Register from "./components/Auth/Register"
import setAuthToken from "./utils/setAuthToken"
import {loaduser} from "./actions/auth"
// import logo from './logo.svg';
import {Provider} from "react-redux"
import store from "./store"
import './App.css';
import PrivateRoute from "./components/routing/PrivateRoute"
if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App=()=>{
 useEffect(()=>{
  store.dispatch(loaduser())
 },[])
  return (
   <Provider store={store}>
      <Router>
    <Fragment>
      <Navbar/>
      {/* <Landing/> */}
      <Route exact path="/" component={Landing}/>
      <section className="container">
        <Alert/>
        <Switch>
        <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>

      </section>
    </Fragment>
    </Router>
   </Provider>
  );
}

export default App;
