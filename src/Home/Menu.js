import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Menu extends Component {
  render() {
    return (
      <div className="content-wrapper">
          
        <div className="content-header"> 
         <div className="row">
    <div className="col-lg-3 col-6">
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to='/home'  className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Arıza Form</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="UserImage" />
            </div>
            <div className="info">
              <Link to='/profile' className="d-block">Profil</Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column " data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item ">
                <Link to="/home" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Anasayfa
                  
                    </p>
                </Link>
               
              </li>
             
              <li className="nav-item ">
                <Link to="/customers" className="nav-link ">
                <i className="nav-icon far fa-plus-square"></i>
                  <p>
                  Müşteri Ekle              
                  </p>
                </Link>
               
              </li>
        

              <li className="nav-item ">
                <Link to="/customerslist" className="nav-link ">
                <i className="nav-icon fas fa-copy"></i>
                  <p>
                  Müşterileri Listele             
                  </p>
                </Link>
                
              </li>
          
              <li className="nav-item ">
                <Link to="/failuresadd" className="nav-link ">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                 Arıza Ekle              
                  </p>
                </Link>
               
              </li>
              <li className="nav-item ">
                <Link to="/failureslist" className="nav-link ">
                  <i className="nav-icon fas fa-copy" />
                  <p>
                  Arızaları Listele             
                  </p>
                </Link>
               
              </li>
            
              <li className="nav-item ">
                <Link to="/reports" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                 
                  <p>
                  Raporlar
                    
                  </p>
                </Link>
               
              </li>
              
             
               
             </ul>
          </nav>
          </div>
        {/* /.sidebar */}
      </aside>
      </div>
      </div>
      </div>
      </div>



    )
  }
}
