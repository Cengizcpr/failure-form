import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'
import{customerlist} from '../component/CustomerFunctions'
import{failures} from '../component/FailuresFunctions'
import ImageUploader from 'react-images-upload';
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
      file: null,
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
   const files = document.getElementById('INPUT_TAG').files
  const formData = new FormData()
  formData.append('image', files[0])
  
    const newFailures= {
    failures_name: this.state.failures_name,
    failures_species: this.state.failures_species,
    brand_name: this.state.brand_name,
    price: this.state.price,
    note: this.state.note,
   customer_name:b,
   failuresstate:c,
   originalname:files[0].name
   
    
     } 
        axios.post('failures/fregister', formData)
  .then((response) => {
   
   axios.put('failures/fregister', newFailures)
      .then((response) => {
        window.location.replace('/home')

      }).catch((error) => {
  });     
}).catch((error) => {
});   
     
   
  
 
   
}

  _handleSubmit(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    this.setState({
     imagePreviewUrl: reader.result,
    showMe:true})
  }
  
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    this.setState({
      imgCollection: e.target.files[0]
    })
     reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
        showMe:true,

      }); 
     
    } 
    console.log(file)

    reader.readAsDataURL(file)
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


    onChangeHandler=event=>{
      var file = event.target.files[0];
      console.log(file);
      console.log(this.validateSize(event));
      if(this.validateSize(event)){ 
        console.log(file);
    // if return true allow to setState
       this.setState({
        selectedFile: file
        });
   
      }
    }
    
  render() { 
   
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} style={{ width:'100mm', height: '100mm' }} />);
    } else {
      $imagePreview = (<div className="previewText">
      Lütfen mnizleme için bir Görüntü seçin</div>);
    }

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
    <input type="text"  className="form-control" placeholder="Arıza Adı:"  name="failures_name" id="INPUT_TAS"  value={this.state.failures_name}  onChange={this.onChange}   required /><br/>
   
    <input type="text"  className="form-control" placeholder="Arıza Cinsi:"  name="failures_species"  value={this.state.failures_species}  onChange={this.onChange}  required /><br/>
   
    <input type="text"  className="form-control" placeholder="Marka Adı:"  name="brand_name"  value={this.state.brand_name}  onChange={this.onChange}    required /><br/>
    <input type="text"  className="form-control" placeholder="Fiyatı:"  name="price"  value={this.state.price}  onChange={this.onChange}    required /><br/>
    <input type="text"  className="form-control" placeholder="Not:"  name="note"  value={this.state.note}  onChange={this.onChange}    required /><br/>
    <div className="custom-file">
 
              
                <input type="file"    name="myImage" id="INPUT_TAG" onChange= {this.onChange} />
                <button type="submit" >Yükle</button>
          
   
  
    </div>{this.state.durum22}
    {/* <div className="input-group">
  <div className="input-group-prepend">
  
  </div>
  <div className="custom-file">
    <input
      type="file"
      className="custom-file-input"
      name="myImage" id="INPUT_TAG" onChange= {this.onChange}
    />
    <label className="custom-file-label" htmlFor="inputGroupFile01">
      Resmi Seçiniz
    </label>
  </div>
</div>
   */}
          {this.state.showMe?<div style={{ width:'100mm', height: '100mm' }}>
          {$imagePreview}
        </div>:null
      
  }<br/>
    <button type="submit" className="registerbtn btn-primary btn-block btn-flat">Kaydet</button> </form>
    
  </div>
  
</div>


      
      
     

    )
  }
}


export default FailuresAdd