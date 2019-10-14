import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import register from "./component/Register"
import login from "./component/Login" 
import Profile from "./Home/Profile"
import Home from "./Home/Home"
import Failures from "./Home/FailuresAdd"
import FailuresList from "./Home/FailuresList"
import Reports from "./Home/Reports"
import Notfound from "./component/Notfound"
import Customers from "./Home/Customers"
import Customerslist from "./Home/Customerslist"
class App extends Component {
  render() {
    return (
      <Router>
       <Switch>
          <Route exact path="/" component={login}/>
          <Route exact path="/register" component={register}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/failuresadd" component={Failures}/>
          <Route exact path="/failureslist" component={FailuresList}/>
          <Route exact path="/reports" component={Reports}/>   
          <Route exact path="/customers" component={Customers}/>
          <Route exact path="/customerslist" component={Customerslist}/>
          <Route exact  component={Notfound}/> 
          </Switch>
      </Router>
    )
  }
}
export default App;