import React, { Component } from 'react';
import {StyleSheet} from '@react-pdf/renderer';
import {failureslist} from '../component/FailuresFunctions'
import jwt_decode from 'jwt-decode'
import Header from "./Header"
import Menu from "./Menu"
import {getProfile} from '../component/UserFunctions'
import {customerlist} from '../component/CustomerFunctions'
import Page from './Page';
/* import SinglePage from './SinglePage'
 */import PrintButton from "./PrintButton";
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  yazi:{
    textAlign:"center",
    fontStyle:"bold"
  },
  arka:{
    backgroundColor:"white"
  }
});

class Reports extends Component {

constructor(){
  super()
  this.state={
    cname:'',
    fname:'',
    cadress:'',
    fspecies:'',
    bname:'',
    fprice:'',
    fnote:'',
    ucompany:'',
    uadress:'',
    uphone:'',
    uemail:'',
    cphone:'',
    showMe:true,
      showMe2:false,
      showMe3:false,
    locations:[],
   
  }
}


  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
    const decoded = jwt_decode(token)
 
    failureslist().then(res=>{
    this.setState({
      ad:res[0].customer_name,
      locations:res,
      uemail:decoded.email
    })
  })
  
  }catch(error){
window.location.replace('/')
  }
  
  }
  prints(a)
  {
    console.log(a.customer_name)
    customerlist().then(res=>{
    for(var i=0;i<res.length;i++){
    if(res[i].first_name+' '+res[i].last_name==a.customer_name)
      this.setState({
      
      cphone:res[i].phone_no,
      cadress:res[i].adress
    })
    }
  })
    getProfile().then(res=>{
    
      for(var i=0;i<res.length;i++){
       if(this.state.uemail==res[i].email)
       {
       this.setState({
            
            uadress:res[i].adress,
            ucompany:res[i].company_name,
            uemail:res[i].email,
            uphone:res[i].phone_no


          

        })
      }
      }
    })
    this.setState({
      cname:a.customer_name,
      fname:a.failures_name,
      fspecies:a.failures_species,
      bname:a.brand_name,
      fprice:a.price,
      cphone:a.phone_no,
      fnote:a.note,
      showMe:false,
      showMe2:true,
      showMe3:true
    })
  }
  render(){
    let today = new Date();

    let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
    const cities=this.state.locations.map(data => (
      <tr key={data._id} >
      
      <td>{data.customer_name}</td>
      <td>{data.failures_name}</td> 
      <td>{data.failures_species} </td> 
      <td>{data.brand_name}</td> 
      <td>{data.price}</td> 
      <td>{data.note}</td>
      <td> <input type="button" className="btn btn-warning  btn-flat " onClick={()=>this.prints(data)} value={'Rapor Oluştur'} ></input></td>
      
      </tr>
    ));
  return (
     <div>
    <Header/>
    <Menu/>{this.state.showMe?
    <div className="container">
    <div className="card-body">
  
    
        
              <h1 className='container' style={styles.yazi}></h1>
            <table id="students" className="table table-bordered table-striped" > 
      <thead>
        <tr >
        
        <th ><h6>Müşteri Adı </h6></th>
      <th ><h6>Arıza Adı</h6></th>
      <th><h6>Arıza Cinsi</h6></th>
      <th><h6>Marka Adı</h6></th>
      <th><h6>Fiyat</h6></th>
      <th><h6>Not</h6></th>
      <th><h6>Ayarlar</h6></th>
        </tr>
      </thead>
      <tbody>
    {cities}
    </tbody>
    </table>
           
       
        
 

   

  
    </div> 
 </div>  
 :null
}
 
  
{this.state.showMe3? 
  <div className="text-right" style={{position:"relative",top:'50px',right:'30px'}}>
        <button id="printInvoice" className="btn btn-info" onClick={()=>window.print()}><i className="fa fa-print" /> Yazdır</button>
          <PrintButton id={"singlePage"}  label={"Pdf İndir"}  />
     
        </div>   :null
      }


  <div className="container" style={styles.arka} id={"singlePage"}> 
{this.state.showMe2? 
  <Page singleMode={true} id={"singlePage"}>
   <div className="container" style={{  width:'210mm', height: '297mm'}}>
  <div className="row"  >
    <div className="col-12">
      <div className="card">
        <div className="card-body p-2">
          <div className="row p-5">
            <div className="col-md-6">
              <h1>Arıza Formu</h1>
            </div>
            <div className="col-md-6 text-right">
             
              <p className="text-muted">Tarih: {date}</p>
            </div>
          </div>
          <hr className="my-5" />
          <div className="row pb-5 p-5">
            <div className="col-md-6">
              <p className="font-weight-bold mb-4">Müşteri Bilgisi</p>
              <p className="mb-1">{this.state.cname}</p>
              <p>{this.state.cphone}</p>
              <p className="mb-1">{this.state.cadress}</p>
              
            </div>
            <div className="col-md-6 text-right">
            
              <p className="font-weight-bold mb-4">Şirket Hakkında</p>
              <p className="mb-1"><span className="text-muted">Adı: </span>{this.state.ucompany} </p>
              <p className="mb-1"><span className="text-muted">Telefon: </span> {this.state.uphone}</p>
              <p className="mb-1"><span className="text-muted">Eposta: </span> {this.state.uemail}</p>
              <p className="mb-1"><span className="text-muted">Adres: </span> {this.state.uadress}</p>
              
            </div>
          </div>
          <div className="row p-5">
            <div className="col-md-12">
              <table className="table">
                <thead>
               
                <tr >
        <th>Marka Adı:</th>
        <th >{this.state.bname}</th>
     
        </tr>
        <tr >
        <th>Arıza Nedeni: </th>
        <th >{this.state.fname}</th>
     
        </tr>
        <tr >
        <th>Yapılan İşlemler: </th>
        <th >{this.state.fspecies}</th>
     
        </tr>
       
       
        <tr >
        <th>Not: </th>
        <th >{this.state.fnote}</th>
     
        </tr>
                </thead>
                
              </table>
            </div>
          </div><div className="d-flex flex-row-reverse  p-4">
            <div className="py-3 px-5 text-right">
            <div className="mb-2"> <p className="font-weight-bold mb-4">Fiyat: 
          {this.state.fprice}₺</p></div>
            </div>
           
           
          </div>
          <div className="d-flex flex-row-reverse  p-4">
            <div className="py-3 px-5 text-right">
            <div className="mb-2"> <p className="font-weight-bold mb-4">Müşteri Onay</p></div>
            </div>
            <div className="py-3 px-5 text-left">
            <div className="mb-2"> <p className="font-weight-bold mb-4">Firma Onay</p></div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>
  
</Page>
  :null
  }
</div>
  </div>

  );
  }
}

export default Reports

