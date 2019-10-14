import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import {Link} from "react-router-dom"
import{customerlist} from '../component/CustomerFunctions'

import{ failureslist} from '../component/FailuresFunctions'

export default class Home extends Component {
  constructor() {
    super() 
    
    
    this.state = {
      customernumber:'',
      failuresnumber:''
      };
  

    
  }
  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
    customerlist().then(res=>{
      this.setState({
       
        customernumber:res.length
        
      })
    })
    failureslist().then(res=>{
      this.setState({
        failuresnumber:res.length
      })
    })
  }catch(error){
window.location.replace('/')
  }
  
  }
  render() {
    return (
       <div>
      <Header/>
      <Menu/>
      <div className="content-wrapper">
        
       <div className="content-header">  <div className="row">
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>{this.state.failuresnumber}</h3>
        <p>Arızalar </p>
      </div>
      <div className="icon">
      <Link to='/failuresadd' class="icon" >  <i className="nav-icon fas fa-edit" /></Link>
      </div>
      <Link to='/failureslist' class="small-box-footer">Daha fazla bilgi
 <i className="fas fa-arrow-circle-right" /></Link>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-success">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
        <i className="ion ion-stats-bars" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
  <div class="small-box bg-warning">
              <div class="inner">
                <h3>{this.state.customernumber}</h3>

                <p>Müşteriler</p>
              </div>
              <div class="icon">
              <Link to='/customers' class="icon" ><i className="nav-icon fas fa-edit"></i> </Link>
              </div>
              <Link to='/customerslist' class="small-box-footer">Daha fazla bilgi
 <i class="fas fa-arrow-circle-right"></i></Link>
            </div>
  </div>
  {/* ./col */}
  <div className="col-lg-3 col-6">
    {/* small box */}
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>65</h3>
        <p>Unique Visitors</p>
      </div>
      <div className="icon">
        <i className="ion ion-pie-graph" />
      </div>
      <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
    </div>
  </div>
  {/* ./col */}
</div>

      </div>
      </div>
      </div>
    )
  }
}
