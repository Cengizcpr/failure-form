import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class FailuresAdd extends Component {
  constructor(props) {
    super(props) 
    
    
    this.state = {
      locations:[],
      failures_name:'',
      profileImg: '',
      brand_name:'',
      price:'',
      customer_name:'',
      note:'',
      failuresstate:'', 
      failures_pay:'',
      failures_color:'',
      durum:'Beklemede',
      durum2:'Yapıldı',
      startDate:new Date(),
      failures_date:''
    };    

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      this.onFileChange = this.onFileChange.bind(this);
     

    
  }

  handleChangeCalendar = date => {
    this.setState({
      startDate: date,
      failures_date: parseInt(date.getMonth()+1)+"/"+date.getDate() +"/"+date.getFullYear()
    });

  }; 

onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
}

onChange(e) {this.setState({ [e.target.name]: e.target.value }) }

handleChangeCustomer = (e) => {
    let index = e.nativeEvent.target.selectedIndex;
   
    this.setState({
    customer_name:e.nativeEvent.target[index].text
    })
}

handleChangeState = (e) => {
  let index = e.nativeEvent.target.selectedIndex;
  this.setState({
  failuresstate:e.nativeEvent.target[index].text
  })
}

handleChangeFailuresName = (e) => {
  let index = e.nativeEvent.target.selectedIndex;
  this.setState({
  failures_name:e.nativeEvent.target[index].text
  })
}

handleChangeColor = (e) => {
  let index = e.nativeEvent.target.selectedIndex;
  this.setState({
    failures_color:e.nativeEvent.target[index].text
  })
}

handleChangePay = (e) => {
  let index = e.nativeEvent.target.selectedIndex;
  this.setState({
  failures_pay:e.nativeEvent.target[index].text
  })
}

onSubmit(e){
  e.preventDefault();
  console.log(this.state.date)
  const formData = new FormData()
  formData.append('profileImg', this.state.profileImg)

    const newFailures= {
    failures_name: this.state.failures_name,
    failures_species: this.state.failures_species,
    brand_name: this.state.brand_name,
    price: this.state.price,
    note: this.state.note,
    customer_name:this.state.customer_name,
    failuresstate:this.state.failuresstate,
    formData,
    failures_color:this.state.failures_color,
    failures_pay:this.state.failures_pay,
    failures_date:this.state.failures_date
    }

  formData.append('failures_name',this.state.failures_name)
        
  axios.post('failures/fregister', newFailures)
  .then((response) => {
    axios.put('failures/fregister',formData)
  .then((response) => {
    
    window.location.replace('/home')
  }).catch((error)=>{
    window.location.replace('/home')
  }) 
  }).catch((error) => {
});   

 
   
}

 
 
  componentDidMount(e) {
    const token = localStorage.usertoken
    const fadate=new Date()

  try{
    jwt_decode(token)
    customerlist().then(res =>{
      this.setState({
        locations:res,
        failures_date:parseInt(fadate.getMonth()+1)+"/"+fadate.getDate() +"/"+fadate.getFullYear()
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
      
      <div className="content-wrapper"> 
      <div className='card'><div className="card-body"></div>
      <div  className="container ">  
      <section className='content '>
  <div className='row justify-content-center'>
          <div className="col-md-6">
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Arıza Kaydı</h3>
    </div>
   
    <form noValidate onSubmit={this.onSubmit}> 
      <div className="card-body">
      <div className="form-group">
      <label htmlFor="exampleInputPassword1">Müşteri Seçiniz</label>
      <select className="form-control"  onChange={this.handleChangeCustomer} >
      <option>Müşteri Seçiniz </option>
      {customers}
    </select><br/>
    <label htmlFor="exampleInputPassword1">Durum Seçiniz</label>
    <select className="form-control"  onChange={this.handleChangeState} >
    <option>Durum Seçiniz </option>
      <option>{this.state.durum} </option>
      <option>{this.state.durum2} </option>
    </select></div>
     
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Arıza Adı</label>
    <select className="form-control"  onChange={this.handleChangeFailuresName} >
    <option>Arıza Adı </option>
      <option>Beslenme Çantası </option>
      <option>Cüzdan </option>
      <option>Çanta</option>
      <option>El Çantası </option>
      <option>Kalemlik </option>
      <option>Kemer </option>
      <option>Laptop Çantası </option>
      <option>Okul Çantası </option>
      <option>Sırt Çantası </option>
      <option>Valiz</option>
    </select>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Ürün Renk</label>
    <select className="form-control"  onChange={this.handleChangeColor} >
    <option>Renk Seçiniz </option>
      <option>Sarı </option>
      <option>Beyaz</option>
      <option>Bordo</option>
      <option>Gri </option>
      <option>Altın </option>
      <option>Gümüş </option>
      <option>Kahverengi </option>
      <option>Kırmızı </option>
      <option>Lacivert </option>
      <option>Mavi</option>
      <option>Mor</option>
      <option>Pembe</option>
      <option>Siyah</option>
    </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Arıza Ödeme</label>
          <select className="form-control"  onChange={this.handleChangePay} >
          <option>Ödeme Seçiniz </option>
      <option>Ödeme Yapılmadı</option>
      <option>Ödeme Alındı </option>

     
    </select>     
      </div>
      <div className="form-group">
          <label htmlFor="exampleInputPassword1">Teslim Tarihi</label><br/>
          <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChangeCalendar}
  
      /> </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Marka Adı </label>
          <input type="text"  className="form-control" placeholder="Marka Adı:"  name="brand_name"  value={this.state.brand_name}  onChange={this.onChange}    required />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Fiyat</label>
          <div className="input-group">
          <input type="number"  className="form-control" placeholder="Fiyatı:"  name="price"  value={this.state.price}  onChange={this.onChange}    required />

            
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Not</label>
          <div className="input-group">
          <textarea type="text"  className="form-control" placeholder="Not:"  name="note"  value={this.state.note}  onChange={this.onChange}    required /><br/>

            
          </div>
        </div>

        <div class="form-group">
          <label for="exampleFormControlFile1">Resmi Yükle</label>
          <input type="file"  class="form-control-file" onChange={this.onFileChange} />
        </div>
     
      </div>
      <div className="card-footer">
        <button type="submit" className="btn btn-primary">Kaydet</button>
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


export default FailuresAdd