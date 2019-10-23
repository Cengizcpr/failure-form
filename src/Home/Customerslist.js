import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
 import {customerupdate} from '../component/CustomerFunctions'
 import {customerdelete} from '../component/CustomerFunctions'

 class Customerslist extends Component {
  constructor() {
    super() 
    
    
    this.state = {
      locations:[],
      showMe:true,
      showMe2:false,
      first_name: '',
      last_name: '',
      email: '',
      phone_no:'',
      adress:'',
      _id:'',
      first_name2:'',
      buton:'Sil'
     
      

      };
  
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)

  }
 
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
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
  
 operation(a){
  
   this.setState({
     showMe2:true,
     showMe:false,
     first_name:a.first_name,
      last_name:a.last_name,
      phone_no:a.phone_no,
      adress:a.adress,
      _id:a._id
   }) 
    
   

 
 }

deletecustomer(data)  {
  const a=data._id
  customerdelete({_id:a}).then(res=>
    {     
      this.props.history.push(`/home`)

 
  })  
 
  

}
 onSubmit(e) {
 e.preventDefault()
 
  const newCustomer = {
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    phone_no: this.state.phone_no,
    adress: this.state.adress,
    _id:this.state._id
    }
    
   customerupdate(newCustomer).then(res => {
    window.location.replace('/home')
  }) 
   customerupdate(newCustomer).catch(err=>{
    window.location.replace('/customer')
  }) 
   
}
  
  render() { 
    
    const cities=this.state.locations.map(data => (
      <tr key={data._id}>
        <td  name="_id"  value={this.state._id}>{data._id}</td>
     <td>{data.first_name}</td>
      <td>{data.last_name}</td> 
      <td>{data.phone_no}</td> 
      <td>{data.adress}</td> 
      <td>{data.date}</td> 
      <td><input type="button" className="btn btn-primary btn-flat " value={'Güncelle'} onClick={()=>this.operation(data)}></input>&nbsp;&nbsp;&nbsp;<input type="button" className="btn btn-danger  btn-flat "  value={this.state.buton}  onClick={()=>this.deletecustomer(data)}></input></td> 

      </tr>
      
    ));
    return ( 

      <div>
      <Header/>
      <Menu/>
      <div className="content-wrapper"> 
      <div className="card">
        
  {/*()=>this.operation(data) /.card-header */}
  <div className="card-body">{this.state.showMe?
    <table id="students" className="table table-bordered table-striped">
      <thead>
        <tr>
        <th><h6>İd</h6></th>
          <th><h6>Müşteri Adı</h6></th>
          <th><h6>Müşteri Soyadı</h6></th>
          <th><h6>Telefon No</h6></th>
          <th><h6>Adres</h6></th>
          <th><h6>Tarih</h6></th>
          <th><h6>Ayarlar</h6></th>
        </tr>
      </thead>
      <tbody>
    {cities}
    </tbody>
    </table>
    :null
  }
  </div>
  {this.state.showMe2? <div  className="container"> 
  <h3 className="text-center">Müşteri Güncelleme</h3>
   
   <hr />
    <form >
    <input type="text"  className="form-control" placeholder="İd:"  name="_id"  value={this.state._id} onChange={this.onChange}  required  /><br/>

    <input type="text"  className="form-control" placeholder="Müşteri Telefon No:"  name="phone_no"  value={this.state.phone_no} onChange={this.onChange}  required  /><br/>

       <input type="text"  className="form-control" placeholder="Müşteri Adı:"  name="first_name"  value={this.state.first_name} onChange={this.onChange}  required /><br/>

    <input type="text"  className="form-control" placeholder="Müşteri Soyadı:"  name="last_name"  value={this.state.last_name} onChange={this.onChange}   required /><br/>
   
    <input type="text"  className="form-control" placeholder="Müşteri Adresi:"  name="adress"  value={this.state.adress} onChange={this.onChange}  required /><br/>
 
   
    
    <button type="submit"  className="registerbtn btn-primary btn-block btn-flat" onClick={this.onSubmit}>Kaydet</button> </form>
  
 
  </div> :null
}
</div>

       
       </div>
  
</div>


    )
  }
}

export default Customerslist