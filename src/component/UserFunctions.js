import axios from 'axios'

export const register = newUser => {
  return axios
    .post('users/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
 .then(response => {
   
    localStorage.setItem('usertoken', response.data)
    
    if(response.data=="[object Object]"){return false}
    else{return true}

     // return response.data
 
    })
    .catch(err => {
      
     return err
    })
}

export const getProfile = user => {
  return axios
  
    .get('users/profile', {
  headers: { Authorization: ` ${this.getToken()}` 
  }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {localStorage.clear()
      console.log(err)
    })
}
