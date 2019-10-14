import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
import {Link} from "react-router-dom"
import{ failureslist} from '../component/FailuresFunctions'

 class Reports extends Component {
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
        
       <div className="content-header">   
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
      </div>
      </div>

    )
  }
}
export default Reports