import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
import{failures} from '../component/FailuresFunctions'
let b="",c=''
 class FailuresAdd extends Component {
  constructor() {
    super() 
    
    
    this.state = {
      locations:[],
      failures_name:'',
      failures_species:'',
      brand_name:'',
      price:'',
      customer_name:'',
     type:'',
      note:'',
      failuresstate:'',
     durum:'Beklemede',
     durum2:'Yapıldı'
      };    

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  

    
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    const a=e.nativeEvent.target[index].text;
  

   b=a;console.log(b)
   

}
handleChange2 = (e) => {
  let index = e.nativeEvent.target.selectedIndex;
  const a=e.nativeEvent.target[index].text;


 c=a;console.log(c)
 

}
  onSubmit(e)  {console.log(b)
    e.preventDefault()
   
     
    
 
    
    const newFailures= {
      failures_name: this.state.failures_name,
      failures_species: this.state.failures_species,
      brand_name: this.state.brand_name,
      price: this.state.price,
      note: this.state.note,
      
     customer_name:b,
     failuresstate:c
       }

    failures(newFailures).then(res => {
      window.location.replace('/home')
    })
  }
  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
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
   

    const customers=this.state.locations.map(data => (
      
      <option key={data._id}>{data.first_name} {data.last_name}</option>
     
    ));   
    
    return (

      <div>
      <Header/>
      <Menu/>
          
      <div className="container">
    <h3 className="text-center">Arıza Kaydı</h3>
   
    <hr />
    <form noValidate onSubmit={this.onSubmit}>  
    <select className="form-control"  onChange={this.handleChange} >
      <option>Müşteri Seçiniz... </option>
      {customers}
    </select><br/>
    <select className="form-control"  onChange={this.handleChange2} >
      <option>Durum Seçiniz... </option>
      <option>{this.state.durum} </option>
      <option>{this.state.durum2} </option>
    </select><br/>
    <input type="text"  className="form-control" placeholder="Arıza Adı:"  name="failures_name"  value={this.state.failures_name}  onChange={this.onChange}   required /><br/>
   
    <input type="text"  className="form-control" placeholder="Arıza Cinsi:"  name="failures_species"  value={this.state.failures_species}  onChange={this.onChange}  required /><br/>
   
    <input type="text"  className="form-control" placeholder="Marka Adı:"  name="brand_name"  value={this.state.brand_name}  onChange={this.onChange}    required /><br/>
    <input type="text"  className="form-control" placeholder="Fiyatı:"  name="price"  value={this.state.price}  onChange={this.onChange}    required /><br/>
    <input type="text"  className="form-control" placeholder="Not:"  name="note"  value={this.state.note}  onChange={this.onChange}    required /><br/>

   
    <button type="submit" className="registerbtn btn-primary btn-block btn-flat">Kaydet</button> </form>
    <h2></h2>
  </div>
  
</div>


      
      
     

    )
  }
}

export default FailuresAdd