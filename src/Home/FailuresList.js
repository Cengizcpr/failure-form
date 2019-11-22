import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import {failureslist} from '../component/FailuresFunctions'
import {failuresupdate} from '../component/FailuresFunctions'
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
     imagepath:''
      
  
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
 console.log(a.profileImg)
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
   // console.log(this.state.imagepath)
   a=this.state.imagepath
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
yazdır(a){
  this.setState({
    showMe3:true,
    showMe4:true,
    showMe:false,
    showMe2:false,
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
  onSubmit(e) {
 console.log(statesetting);

 const newCustomer = {
  customer_name: this.state.customer_name,
  failures_name: this.state.failures_name,
  brand_name: this.state.brand_name,
  price: this.state.price,
  note:this.state.note,
  failuresstate:statesetting,

}
  
 
 
   axios.put('failures/flist', newCustomer)
    .then((response) => {
      /* axios.put('failures/flist',formData)
      .then((response)=>{ */
        window.location.replace('/home')
     // })

  }).catch((error) => {
  });   
  }
  
  createpdf(data){

    this.setState({
      customername_pdf:data.customer_name,
      failuresname_pdf:data.failures_name,
      failuresspecies_pdf:data.failures_species,
      brandname_pdf:data.brand_name,
      price_pdf:data.price,
      note_pdf:data.note_pdf
    })
  }

  
  render() { 

   

      const cities=this.state.locations.map(data => (
        
      <tr key={data._id}>
      <td  name="_id"  value={this.state._id}>{data._id}</td>
      <td value={this.state.customername_pdf} >{data.customer_name}</td>
      <td>{data.failures_name}</td> 
      <td>{data.failures_species} </td> 
      <td>{data.brand_name}</td> 
      <td>{data.price}</td> 
      <td>{data.note}</td> 
      <td>{data.date}</td> 
      <td value={data.profileImg}>{data.failuresstate}</td> 
      <td> <input type="button" className="btn btn-primary btn-flat " value={'Güncelle'} onClick={()=>this.operation(data)}></input>&nbsp;&nbsp;&nbsp;<input type="button" className="btn btn-danger  btn-flat " onClick={()=>this.deletefailures(data)} value={'Sil'} ></input></td> 
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
        <tr >
        <th><h6>İd </h6></th>
        <th ><h6>Müşteri Adı </h6></th>
      <th ><h6>Arıza Adı</h6></th>
      <th><h6>Arıza Cinsi</h6></th>
      <th><h6>Marka Adı</h6></th>
      <th><h6>Fiyat</h6></th>
      <th><h6>Not</h6></th>
      <th><h6>Tarih</h6></th>
      
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
  {this.state.showMe2?   <section className='content'>
        <div className="container">
  <div className='row'>
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
          <input type="text"  className="form-control"  name="price"  value={this.state.price} onChange={this.onChange}  required /><br/>

            
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Not</label>
          <div className="input-group">
          <input type="text"  className="form-control"   name="note"  value={this.state.note} onChange={this.onChange}  required /><br/>

          <label value={this.state.imagepath}></label>

          </div>
        </div>

        <div class="form-group">
                                    <label for="exampleFormControlFile1">Ürün İlk Hali</label>
                                    <img src={require(('../uploads/'+this.state.imagepath))} style={{width: '500px',height:'500px'}}/><br/>
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
  </div>
  </section>  :null
}
</div>

       
       </div>
  
</div>


    )
  }
}
export default FailuresList