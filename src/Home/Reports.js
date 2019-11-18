import React, { Component } from 'react';
import {Document, Page,Text, StyleSheet, View} from '@react-pdf/renderer';
import Printer, { print } from 'react-pdf-print'
import {failureslist} from '../component/FailuresFunctions'
import jwt_decode from 'jwt-decode'
import Header from "./Header"
import Menu from "./Menu"


const ids = ['1']

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

class Mydocument extends Component {

constructor(){
  super()
  this.state={
    cname:'',
    fname:'',
    fspecies:'',
    bname:'',
    fprice:'',
    fnote:'',
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
  
  failureslist().then(res=>{
    this.setState({
      ad:res[0].customer_name,
      locations:res
    })
  })
  
  }catch(error){
window.location.replace('/')
  }
  
  }
  prints(a)
  {
    this.setState({
      cname:a.customer_name,
      fname:a.failures_name,
      fspecies:a.failures_species,
      bname:a.brand_name,
      fprice:a.price,
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
        <button className="btn btn-info"   onClick={() => print(ids)}><i className="fa fa-file-pdf-o" /> PDF Dışa Aktar</button>
     
        </div>   :null
      }


  <div className="container" style={styles.arka}> 
{this.state.showMe2?  <Printer>
 
  <div className="container" style={{  width:'210mm', height: '297mm'}}>
  <div className="row"  id={ids[0]}>
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
              <p>05355285698</p>
              <p className="mb-1">Ankara, Türkiye</p>
              
            </div>
            <div className="col-md-6 text-right">
            
              <p className="font-weight-bold mb-4">Şirket Hakkında</p>
              <p className="mb-1"><span className="text-muted">Adı: </span>Anonim Tic.Ltd.Şti. </p>
              <p className="mb-1"><span className="text-muted">Telefon: </span> 1425782</p>
              <p className="mb-1"><span className="text-muted">Eposta: </span> info@gmail.com</p>
              <p className="mb-1"><span className="text-muted">Adres: </span> Ankara</p>
              
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
            <div className="mb-2"> <p className="font-weight-bold mb-4">Fiyat
          {this.state.fprice}+KDV</p></div>
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
  
</div></Printer>
  :null
  }
</div>
  </div>

   
 

  );
  }
}

export default Mydocument;