import React, { Component } from 'react'
import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'
import Content from './Content'

 class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Menu/>
        <Content/>
        <Footer/>  
         </div>
    )
  }
}
export default App;