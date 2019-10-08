import React, { Component } from 'react'
import Header from "./Header"
import Menu from "./Menu"
import jwt_decode from 'jwt-decode'

 class Failures extends Component {
  componentDidMount(e) {
    const token = localStorage.usertoken
  try{
    jwt_decode(token)
  }catch(error){
window.location.replace('/')
  }
  
  }
  
  render() { 
    return (

      <div>
      <Header/>
      <Menu/>
      <div className="content-wrapper">
        
       <div className="content-header"> <h1>Failures</h1> 
      </div>
      </div>
      </div>

    )
  }
}
export default Failures