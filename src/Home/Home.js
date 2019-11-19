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
        failuresnumber:'',
        failuresstates:'',
        failuresstateb:'',
        kasa:''
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
        var states=0,stateb=0,sonuc=0;
        
        for(var i=0;i<res.length;i++){
        
            if(res[i].failuresstate=='Yapıldı')
        {
          
          states=states+1; 
          sonuc=sonuc+parseInt(res[i].price);
        }
        else{
          
          stateb=stateb+1; 
        }
        }
        this.setState({
          failuresnumber:res.length,
          failuresstates:states,
          failuresstateb:stateb,
          kasa:sonuc
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
          <h3>{this.state.kasa}</h3>
          <p>Kasa </p>
        </div>
        <div className="icon">
        <Link to='/failuresadd' className="icon" >  <i className="nav-icon fas fa-edit" /></Link>
        </div>
        <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi
  <i className="fas fa-arrow-circle-right" /></Link>
      </div>
    </div>
    {/* ./col */}
    <div className="col-lg-3 col-6">
      {/* small box */}
      <div className="small-box bg-warning">
        <div className="inner">
          <h3>{this.state.failuresstates}</h3>
          <p>Yapıldı</p>
        </div>
        <div className="icon">
        <Link to='/failuresadd' className="icon" >  <i className="nav-icon fas fa-edit" /></Link>
        </div>
        <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi <i className="fas fa-arrow-circle-right" /></Link>
      </div>
    </div>
    {/* ./col */}
    <div className="col-lg-3 col-6">
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
    </div>
    {/* ./col */}
    <div className="col-lg-3 col-6">
      {/* small box */}
      <div className="small-box bg-danger">
        <div className="inner">
          <h3>{this.state.failuresstateb}</h3>
          <p>Bekleyen Arızalar</p>
        </div>
        <div className="icon">
          <i className="ion ion-pie-graph" />
        </div>
        <Link to='/failureslist' className="small-box-footer">Daha fazla bilgi
  <i className="fas fa-arrow-circle-right"></i></Link>
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
