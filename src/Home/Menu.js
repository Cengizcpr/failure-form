import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Menu extends Component {
  render() {
    return (
      <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link to='/home'  className="brand-link">
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
          <span className="brand-text font-weight-light">Failures Form</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="UserImage" />
            </div>
            <div className="info">
              <Link to='/profile' className="d-block">Admin</Link>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar " data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              <li className="nav-item ">
                <Link to="/home" className="nav-link ">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  
                    </p>
                </Link>
               
              </li>
              <li className="nav-item ">
                <Link  to="/profile" className="nav-link ">
                  <i className="nav-icon fas fa-table" />
                  <p>
                  Customers
                   
                  </p>
                </Link>
               
              </li>
              <li className="nav-item ">
                <Link to="/failures" className="nav-link ">
                  <i className="nav-icon fas fa-edit" />
                  <p>
                  Failures Form               
                  </p>
                </Link>
               
              </li>
              <li className="nav-item ">
                <Link to="/reports" className="nav-link">
                  <i className="nav-icon fas fa-chart-pie" />
                 
                  <p>
                  Reports
                    
                  </p>
                </Link>
               
              </li>
              
             
               
             </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>

    )
  }
}
