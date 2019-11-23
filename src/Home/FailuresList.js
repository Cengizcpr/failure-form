import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {failureslist} from '../component/FailuresFunctions'
import {customerlist} from '../component/CustomerFunctions'
import {failuresdeletes} from '../component/FailuresFunctions'

let statesetting=''
const a=''
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
      showMe3:false,
      showMe4:false,
      customer_name: '',
      failures_name: '',
      failures_species: '',
      customername_pdf:'',
      failuresname_pdf:'',
      profileImg: '',
      failuresspecies_pdf:'',
      brandname_pdf:'',
      price_pdf:'',
      note_pdf:'',
      brand_name:'',
      price:'',
      note:'',
      failuresstate:'',
      colors:'',
      _id:'',
      durum:'Beklemede',
     durum2:'Yapıldı',
     imagepath:'',
     cphoneno:''
      
  
      };
    

      this.onFileChange = this.onFileChange.bind(this);

      this.onChange = this.onChange.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
  }
  onFileChange(e) {
    this.setState({ profileImg: e.target.files[0] })
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
       _id:a._id,
       imagepath:a.profileImg
      
    }) 
   

console.log(a.profileImg)
    if(a.profileImg==null)
    {
      this.setState({
        imagepath:"f0f2e0d5-f180-415a-a523-026cbddf9b39-pagenotfound1.png"
      })
    }
    else{
      this.setState({
        imagepath:a.profileImg
      })
    }
    
  }  
  componentDidMount(e) {
   
    
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
    customerlist().then(res=>{

      for(var i=0;i<res.length;i++)
      {console.log(res[i].first_name+res[i].last_name)
        if(res[i].first_name+res[i].last_name=='CengizhanÇopur')
        {
          this.setState({
            cphoneno:res[i].cphoneno
          })
        }console.log(this.state.cphoneno)
      }
    })
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
    e.preventDefault()


 const newCustomer = {
  customer_name: this.state.customer_name,
  failures_name: this.state.failures_name,
  failures_species:this.state.failures_species,
  brand_name: this.state.brand_name,
  price: this.state.price,
  note:this.state.note,
  failuresstate:statesetting,
/*   profileImg:this.state.imagepath
 */}

const formData = new FormData()
formData.append('profileImg', this.state.profileImg)
formData.append('failures_name',this.state.failures_name)


 
   axios.put('failures/flist', newCustomer)
    .then((response) => {
       axios.put('failures/fliste',formData)
      .then((response)=>{ 
        window.location.replace('/home')
      })
      .catch((error) => {
        window.location.replace('/home')

      });   
  }).catch((error) => {
  });   
  }
  

  
  render() { 

   

      const cities=this.state.locations.map(data => (
        
      <tr key={data._id}>
      <td value={this.state.customername_pdf} >{data.customer_name}</td>
      <td>{data.failures_name}</td> 
      <td>{data.failures_color} </td> 
      <td>{data.brand_name}</td> 
      <td>{data.price}</td> 
      <td>{data.note}</td> 
      <td>{data.date}</td> 
      <td>{data.failures_date}</td> 
      <td>{data.failures_pay}</td> 
      <td value={data.profileImg}>{data.failuresstate}</td> 
      <td> <input type="button" className="btn btn-primary btn-flat " value={'Güncelle'} onClick={()=>this.operation(data)}></input>&nbsp;&nbsp;&nbsp;<input type="button" className="btn btn-danger  btn-flat " onClick={()=>this.deletefailures(data)} value={'Sil'} ></input></td> 
      </tr>
    ));
   
    return (

      <div>
      <Header/>
      <Menu/>
      <div className="content-wrapper" > 
     
      <div className="card">
      
  <div className="card-body">{this.state.showMe?
    <table id="students" className="table table-bordered table-striped" style={{overflow:"auto"}}>
      <thead>
        <tr >
        <th ><h6>Müşteri Adı </h6></th>
      <th ><h6>Arıza Adı</h6></th>
      <th><h6>Ürün Renk</h6></th>
      <th><h6>Marka Adı</h6></th>
      <th><h6>Fiyat</h6></th>
      <th><h6>Not</h6></th>
      <th><h6>Arıza Tarih</h6></th>
      <th><h6>Teslim Tarih</h6></th>
      <th><h6>Ödeme Durumu</h6></th>
      <th><h6>Durum</h6></th>
      <th><h6>Ayarlar</h6> </th>
        </tr>
      </thead>
      <tbody>
    {cities}
    </tbody>
    </table>
    :null
  }
  </div>
  {this.state.showMe2?    <div  className="container ">  
      <section className='content '>
  <div className='row justify-content-center'>
          <div className="col-md-6">
  {/* general form elements */}
  <div className="card card-primary">
    <div className="card-header">
      <h3 className="card-title">Arıza Güncelleme</h3>
    </div>
    {/* /.card-header */}
    {/* form start */}
    <form noValidate onSubmit={this.onSubmit}> 
      <div className="card-body">
      <div className="form-group">

<label htmlFor="exampleInputEmail1">Müşteri Adı Soyadı</label>
<input type="text"  className="form-control"  name="customer_name"  value={this.state.customer_name} onChange={this.onChange}  required  />
</div>   

   <div className="form-group">  <label htmlFor="exampleInputEmail1">Durum Seçiniz</label> <select className="form-control"  onChange={this.handleChange} >
      <option>Durum Seçiniz... </option>
      <option>{this.state.durum} </option>
      <option>{this.state.durum2} </option>
    </select></div>
        <div className="form-group">

          <label htmlFor="exampleInputEmail1">Arıza Adı</label>
          <input type="text"  className="form-control"   name="failures_name"  value={this.state.failures_name} onChange={this.onChange}  required />    <br/>    </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Arıza Cinsi</label>
          <input type="text"  className="form-control"  name="failures_species"  value={this.state.failures_species} onChange={this.onChange}   required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Marka Adı </label>
          <input type="text"  className="form-control"   name="brand_name"  value={this.state.brand_name} onChange={this.onChange}  required /><br/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Fiyat</label>
          <div className="input-group">
          <input type="number"  className="form-control"  name="price"  value={this.state.price} onChange={this.onChange}  required /><br/>

            
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Not</label>
          <div className="input-group">
          <input type="text"  className="form-control"   name="note"  value={this.state.note} onChange={this.onChange}  required /><br/>

          <label value={this.state.imagepath}></label>

          </div>
        </div>

        <div class="form-group ">
                                    <label for="exampleFormControlFile1">Ürün Resmi</label>
                                    <img src={require(('../uploads/'+this.state.imagepath ))} style={{width: '100%',height:'600px'}}/><br/>
                                </div>

      <div class="form-group">
         <label for="exampleFormControlFile1">Resmi Yükle</label>
          <input type="file"  class="form-control-file" onChange={this.onFileChange} capture='camera' />
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
 :null
}
</div>

       
       </div>
  
</div>


    )
  }
}
export default FailuresList