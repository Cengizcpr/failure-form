import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import {customer} from '../component/CustomerFunctions'
 class Customers extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      phone_no: '',
      adress: '',
      sonuc:'',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newCustomer = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone_no: this.state.phone_no,
      adress: this.state.adress    }

    customer(newCustomer).then(res => {
      window.location.replace('/home')
    })
  }


  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
  }catch(error){
window.location.replace('/')
  }
  
  }
  
  render() { 
    return (

      <div>
      <Header/>
      <Menu/>
      
        <div className="container">
    <h1 className="text-center">Müşteri Kaydı</h1>
   
    <hr />
    <form noValidate onSubmit={this.onSubmit}>  
    <input type="text"  className="form-control" placeholder="Müşteri Adı:"  name="first_name"  value={this.state.first_name}  onChange={this.onChange} required /><br/>
   
    <input type="text"  className="form-control" placeholder="Müşteri Soyadı:"  name="last_name"  value={this.state.last_name}  onChange={this.onChange} required /><br/>
   
    <input type="text"  className="form-control" placeholder="Müşteri Telefon No:"  name="phone_no"  value={this.state.phone_no}  onChange={this.onChange} required /><br/>
    <input type="text"  className="form-control" placeholder="Müşteri Adresi:"  name="adress"  value={this.state.adress}  onChange={this.onChange} required /><br/>

   
    <button type="submit" className="registerbtn btn-block btn-flat">Kaydet</button> </form>
  </div>
  
</div>


    )
  }
}
export default Customers