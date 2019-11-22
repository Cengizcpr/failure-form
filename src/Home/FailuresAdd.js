import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
import axios from 'axios'

let b="",c=''
 class FailuresAdd extends Component {
  constructor(props) {
    super(props) 
    
    
    this.state = {
      locations:[],
      showMe:false,
      imgCollection:'',
      pictures: [] ,
      description: '',
      selectedFile: null,
      failures_name:'',
      failures_species:'',
      multerImage:'',
      durum22:'',
      profileImg: '',
      imagePreviewUrl: '',
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
      this.onFileChange = this.onFileChange.bind(this);

    
  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
}
  onChange(e) {

  
    this.setState({ [e.target.name]: e.target.value }
      )
  
  
      
       
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
onSubmit(e){
  e.preventDefault();
  
  const formData = new FormData()
  formData.append('profileImg', this.state.profileImg)

    const newFailures= {
    failures_name: this.state.failures_name,
    failures_species: this.state.failures_species,
    brand_name: this.state.brand_name,
    price: this.state.price,
    note: this.state.note,
   customer_name:b,
   failuresstate:c,
      formData
   

   
    
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
      
      <div className="content-wrapper"> 
      <div className='card'><div className="card-body"></div>
      <div  className="container ">  
      <section className='content '>
  <div className='row justify-content-center'>
          <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Arıza Kaydı</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form noValidate onSubmit={this.onSubmit}> 
      <div className="card-body">
      <div className="form-group">
      <select className="form-control"  onChange={this.handleChange} >
      <option>Müşteri Seçiniz... </option>
      {customers}
    </select><br/>
    <select className="form-control"  onChange={this.handleChange2} >
      <option>Durum Seçiniz... </option>
      <option>{this.state.durum} </option>
      <option>{this.state.durum2} </option>
    </select><br/></div>
        <div className="form-group">

          <label htmlFor="exampleInputEmail1">Arıza Adı</label>
          <input type="text"  className="form-control" placeholder="Arıza Adı:"  name="failures_name" id="INPUT_TAS"  value={this.state.failures_name}  onChange={this.onChange}   required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Arıza Cinsi</label>
          <input type="text"  className="form-control" placeholder="Arıza Cinsi:"  name="failures_species"  value={this.state.failures_species}  onChange={this.onChange}  required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Marka Adı </label>
          <input type="text"  className="form-control" placeholder="Marka Adı:"  name="brand_name"  value={this.state.brand_name}  onChange={this.onChange}    required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Fiyat</label>
          <div className="input-group">
          <input type="number"  className="form-control" placeholder="Fiyatı:"  name="price"  value={this.state.price}  onChange={this.onChange}    required /><br/>

            
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
      {/* /.card-body */}
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