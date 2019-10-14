import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import {failureslist} from '../component/FailuresFunctions'
 class FailuresList extends Component {
  constructor() {
    super() 
    
    
    this.state = {
      locations:[]
      };
      
  }


  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
    failureslist().then(res =>{
      this.setState({
        locations:res
      })
      
  })
  }catch(error){
window.location.replace('/')
  }
  
  }
  
  render() { 
    const cities=this.state.locations.map(data => (
      <tr key={data._id}>
     <td>{data.customer_name}</td>
      <td>{data.failures_name}</td> 
      <td>{data.failures_species} </td> 
      <td>{data.brand_name}</td> 
      <td>{data.price}</td> 
      <td>{data.note}</td> 
      <td>{data.date}</td> 

      </tr>
    ));
    return (

      <div>
      <Header/>
      <Menu/>
      <div className="content-wrapper">
      <div className="card">
  <div className="card-header">
    <h3 className="card-title card">Arızalar</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="students" className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Müşteri Adı</th>
          <th>Arıza Adı</th>
          <th>Arıza Cinsi</th>
          <th>Marka Adı</th>
          <th>Fiyat</th>
          <th>Not</th>
          <th>Tarih</th>
        </tr>
      </thead>
      <tbody>
    {cities}
    </tbody>
    </table>
  </div>
</div>

       
       </div>
  
</div>
    )
  }
}
export default FailuresList