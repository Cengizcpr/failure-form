import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
 
 class Customerslist extends Component {
  constructor() {
    super() 
    
    
    this.state = {
      locations:[]
      };
  

    
  }
 
 
  componentDidMount(e) {
    
    const token = localStorage.usertoken
  try{

    jwt_decode(token);

    customerlist().then(res =>{
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
     <td>{data.first_name}</td>
      <td>{data.last_name}</td> 
      <td>{data.phone_no}</td> 
      <td>{data.adress}</td> 
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
    <h3 className="card-title card">Müşteriler</h3>
  </div>
  {/* /.card-header */}
  <div className="card-body">
    <table id="students" className="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Müşteri Adı</th>
          <th>Müşteri Soyadı</th>
          <th>Telefon No</th>
          <th>Adres</th>
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
export default Customerslist