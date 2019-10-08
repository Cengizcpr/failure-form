import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import { register } from './UserFunctions'

 class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push(`/`)
    })
  }
render(){
    return (
        <div className="register-box">
  <div className="register-logo">
  <Link to="/register"><b>Admin</b>LTE</Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
      <p className="login-box-msg">Register a new membership</p>
      <form noValidate onSubmit={this.onSubmit}>        <div className="input-group mb-3">
     
          <input type="text" className="form-control" placeholder="Full name"  name="first_name"  value={this.state.first_name}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
       
          <input type="text" className="form-control" placeholder="Last name"  name="last_name"  value={this.state.last_name}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3"> 
          <input type="email" className="form-control" placeholder="Email" name="email"  value={this.state.email}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">  
          <input type="password" className="form-control" placeholder="Password"   name="password"  value={this.state.password}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
      
        <div className="row">
          
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
          </div>
          {/* /.col */}
        </div>
      </form>
    
      <Link to="/" className="text-center">I already have a membership</Link>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>

    )
    }
}
export default Register