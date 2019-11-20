import React ,{Component} from 'react'
import {Link} from "react-router-dom"
import { register } from './UserFunctions'

 class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      company_name:'',
      phone_no:'',
      adress:'',
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
      password: this.state.password,
      company_name:this.state.company_name,
      phone_no:this.state.phone_no,
      adress:this.state.adress
    }

    register(newUser).then(res => {
      this.props.history.push(`/`)
    })
  }
render(){
    return (
        <div className="register-box">
  <div className="register-logo">
  <Link to="/register"><b>Arıza</b>Takip</Link>
  </div>
  <div className="card">
    <div className="card-body register-card-body">
     
      <form noValidate onSubmit={this.onSubmit}>        <div className="input-group mb-3">
     
          <input type="text" className="form-control" placeholder="Ad"  name="first_name"  value={this.state.first_name}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
       
          <input type="text" className="form-control" placeholder="Soyad"  name="last_name"  value={this.state.last_name}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-user" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3"> 
          <input type="email" className="form-control" placeholder="Email adresi" name="email"  value={this.state.email}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">  
          <input type="password" className="form-control" placeholder="Şifre"   name="password"  value={this.state.password}  onChange={this.onChange} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
       
       <input type="text" className="form-control" placeholder="Şirket Adı"  name="company_name"  value={this.state.company_name}  onChange={this.onChange} />
       <div className="input-group-append">
         <div className="input-group-text">
           <span className="fas fa-user" />
         </div>
       </div>
     </div>
     <div className="input-group mb-3">
       
       <input type="text" className="form-control" placeholder="Telefon No"  name="phone_no"  value={this.state.phone_no}  onChange={this.onChange} />
       <div className="input-group-append">
         <div className="input-group-text">
           <span className="fas fa-phone" />
         </div>
       </div>
     </div>
     <div className="input-group mb-3">
       
       <textarea type="text" className="form-control" placeholder="Şirket Adresi"  name="adress"  value={this.state.adress}  onChange={this.onChange} />
       <div className="input-group-append">
         <div className="input-group-text">
           <span className="fas fa-map-marker" />
         </div>
       </div>
     </div>
        <div className="row">
          
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block btn-flat">Kayıt Ol</button>
          </div>
          {/* /.col */}
        </div>
      </form>
    
      <Link to="/" className="text-center">Bir hesabım var </Link>
    </div>
    {/* /.form-box */}
  </div>{/* /.card */}
</div>

    )
    }
}
export default Register