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
      <div className="content-wrapper"> 
      <div className='card'><div className="card-body"></div>
      <div  className="container ">  
      <section className='content '>
  <div className='row justify-content-center'>
          <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Müşteri Ekle</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form noValidate onSubmit={this.onSubmit}> 
      <div className="card-body">
      <div className="form-group">
          <label htmlFor="exampleInputEmail1">Müşteri Adı</label>
          <input type="text"  className="form-control" placeholder="Müşteri Adı:"  name="first_name"  value={this.state.first_name}  onChange={this.onChange} required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Müşteri Soyadı</label>
          <input type="text"  className="form-control" placeholder="Müşteri Soyadı:"  name="last_name"  value={this.state.last_name}  onChange={this.onChange} required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Müşteri Telefon No</label>
          <input type="tel"  className="form-control" placeholder="Müşteri Telefon No:"  name="phone_no"  value={this.state.phone_no}  onChange={this.onChange} max={9999} required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Müşteri Adresi</label>
          <div className="input-group">
          <input type="text" maxLength={11} className="form-control" placeholder="Müşteri Adresi:"  name="adress"  value={this.state.adress}  onChange={this.onChange} required /><br/>

            
          </div>
        </div>
        
     
      </div>
      {/* /.card-body */}
      <div className="card-footer">
        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Kaydet</button>
      </div>
    </form>
  </div>

</div>

</div> 
 
  </section>


  </div>
  </div>
  </div>
</div>


    )
  }
}
export default Customers