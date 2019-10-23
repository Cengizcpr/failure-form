import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import {failureslist} from '../component/FailuresFunctions'
import {failuresupdate} from '../component/FailuresFunctions'
import {failuresdeletes} from '../component/FailuresFunctions'
let statesetting="";
let yedeks='';
      let yedeks2='';
 class FailuresList extends Component {
   
  constructor() {
    super() 
    failureslist().then(res=>{
      
      for(let i=0;i<res.length;i++)
      {
      
      } 
     
     
    })
   
    
  
    this.state = {
      locations:[],
      showMe:true,
      showMe2:false,
      customer_name: '',
      failures_name: '',
      failures_species: '',
      brand_name:'',
      price:'',
      note:'',
      failuresstate:'',
      colors:'',
      _id:'',
      durum:'Beklemede',
     durum2:'Yapıldı'
      
  
      };
    
      
     
      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }
  deletefailures(data)  {
    const a=data._id
    failuresdeletes({_id:a}).then(res=>
      {     
        this.props.history.push(`/home`)
  
   
    })  
   
    
  
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  operation(a){
 
    this.setState({
      showMe2:true,
      showMe:false,
      customer_name:a.customer_name,
      failures_name:a.failures_name,
      failures_species:a.failures_species,
      brand_name:a.brand_name,
      price:a.price,
      note:a.note,
      failuresstate:a.failuresstate,
       _id:a._id
    }) 
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
  handleChange = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
    const a=e.nativeEvent.target[index].text;
  
    statesetting=a;
   console.log(a)
   

}
  onSubmit(e) {
 console.log(statesetting);
    const newCustomer = {
      customer_name: this.state.customer_name,
      failures_name: this.state.failures_name,
      failures_species: this.state.failures_species,
      brand_name: this.state.brand_name,
      price: this.state.price,
      note: this.state.note,
      _id:this.state._id,
      failuresstate:statesetting
    
    }
      failuresupdate(newCustomer).then(res => {
      window.location.replace('/home')
    })
    failuresupdate(newCustomer).catch(err=>{
      window.location.replace('/customer')
    })
     
  }
  
 
  colorss(data){
    
  
   
  }
  render() { 

   

      const cities=this.state.locations.map(data => (
      <tr key={data._id}>
      <td  name="_id"  value={this.state._id}>{data._id}</td>
      <td>{data.customer_name}</td>
      <td>{data.failures_name}</td> 
      <td>{data.failures_species} </td> 
      <td>{data.brand_name}</td> 
      <td>{data.price}</td> 
      <td>{data.note}</td> 
      <td>{data.date}</td> 
      <td style={{background:this.state.colors}}>{data.failuresstate}</td> 
      <td><input type="button" className="btn btn-primary btn-flat " value={'Güncelle'} onClick={()=>this.operation(data)}></input>&nbsp;&nbsp;&nbsp;<input type="button" className="btn btn-danger  btn-flat " onClick={()=>this.deletefailures(data)} value={'Sil'} ></input></td> 
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
        <th><h6>İd </h6></th>
        <th ><h6>Müşteri Adı</h6></th>
      <th><h6>Arıza Adı</h6></th>
      <th><h6>Arıza Cinsi</h6></th>
      <th><h6>Marka Adı</h6></th>
      <th><h6>Fiyat</h6></th>
      <th><h6>Not</h6></th>
      <th><h6>Tarih</h6></th>
      
      <th><h6>Durum</h6></th>
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
  <h3 className="text-center">Arıza Güncelleme</h3>
   
   <hr />
    <form >
    <input type="text"  className="form-control" placeholder="Müşteri Telefon No:"  name="customer_name"  value={this.state.customer_name} onChange={this.onChange}  required  /><br/>
    <select className="form-control"  onChange={this.handleChange} >
      <option>Durum Seçiniz... </option>
      <option>{this.state.durum} </option>
      <option>{this.state.durum2} </option>
    </select><br/>
       <input type="text"  className="form-control" placeholder="Müşteri Adı:"  name="failures_name"  value={this.state.failures_name} onChange={this.onChange}  required /><br/>

    <input type="text"  className="form-control" placeholder="Müşteri Soyadı:"  name="failures_species"  value={this.state.failures_species} onChange={this.onChange}   required /><br/>
   
    <input type="text"  className="form-control" placeholder="Müşteri Adresi:"  name="brand_name"  value={this.state.brand_name} onChange={this.onChange}  required /><br/>
 
    <input type="text"  className="form-control" placeholder="Müşteri Adresi:"  name="price"  value={this.state.price} onChange={this.onChange}  required /><br/>

    <input type="text"  className="form-control" placeholder="Müşteri Adresi:"  name="note"  value={this.state.note} onChange={this.onChange}  required /><br/>

    <button type="submit"  className="registerbtn btn-primary btn-block btn-flat" onClick={this.onSubmit}>Kaydet</button> </form>
  
 
  </div> :null
}
</div>

       
       </div>
  
</div>


    )
  }
}
export default FailuresList