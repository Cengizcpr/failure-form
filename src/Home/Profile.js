import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import Header from "./Header"
import Menu from "./Menu"
 class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount(e) {
    const token = localStorage.usertoken
    
     try{
     
      
      const decoded = jwt_decode(token)
      this.setState({
        first_name: decoded.first_name,
        last_name: decoded.last_name,
        email: decoded.email
      })
    }
     catch(error) {
     
     
      window.location.replace('/')

       
     }
    
    
    
  }
  
  render() { 
    return (

 <div>  <Header/>
 <Menu/>
  <div className="container">
  
    <div className="content-header">  
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFİL</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Adınız:</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Soyadınız:</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email Adresiniz:</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        
      </div>
  
   
  </div>
  
</div>


    )
  }
}
export default Profile