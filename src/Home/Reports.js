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
      failuresnumber:'',
      
      };
  

    
  }
 
  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
    customerlist().then(res=>{
      
    this.setState({
     
      customernumber:res.length,
      
      
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
        <div className="small-box bg-success">
              <div className="inner">
                <h3>{this.state.customernumber}</h3>

                <p>Müşteriler</p>
              </div>
              <div className="icon">
              <Link to='/customers' className="icon" ><i className="nav-icon fas fa-edit"></i> </Link>
              </div>
              <Link to='/customerslist' className="small-box-footer">Daha fazla bilgi
 <i className="fas fa-arrow-circle-right"></i></Link>
            </div>
          
    {/* small box */}
    <div className="small-box bg-info">
      <div className="inner">
        <h3>{this.state.failuresnumber}</h3>
        <p>Arızalar </p>
      </div>
      <div className="icon">
      <Link to='/failuresadd' className="icon" >  <i className="nav-icon fas fa-edit" /></Link>
      </div>
      <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi
 <i className="fas fa-arrow-circle-right" /></Link>
    </div>
    <div className="small-box bg-danger">
      <div className="inner">
        <h3>{this.state.failuresnumber}</h3>
        <p>Bekleyen Arızalar</p>
      </div>
      <div className="icon">
      <Link to='/failuresadd' className="icon" >  <i className="nav-icon fas fa-edit" /></Link>
      </div>
      <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi <i className="fas fa-arrow-circle-right" /></Link>
    </div>
    <div className="small-box bg-warning">
      <div className="inner">
        <h3>53<sup style={{fontSize: 20}}>%</sup></h3>
        <p>Bounce Rate</p>
      </div>
      <div className="icon">
      <Link to='/failuresadd' className="icon" >  <i className="nav-icon fas fa-edit" /></Link>
      </div>
      <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi <i className="fas fa-arrow-circle-right" /></Link>
    </div>
      </div>
      </div>
      <div className="text-right">
      <button id="printInvoice" className="btn btn-info" onClick={()=>window.print()}><i className="fa fa-print" /> Print</button>
      <button className="btn btn-info"><i className="fa fa-file-pdf-o" /> Export as PDF</button>
    </div>
      </div>

    )
  }
}
export default Reports
