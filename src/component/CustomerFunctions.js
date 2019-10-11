import axios from 'axios'

export const customer = newCustomer => {
  return axios
    .post('customers/cregister', {
      first_name: newCustomer.first_name,
      last_name: newCustomer.last_name,
      phone_no: newCustomer.phone_no,
      adress: newCustomer.adress
    })
    .then(response => {
      console.log('Registered')
    })
}
export const customerlist = customer => {
  return axios
  
    .get('customers/customerlist')
    
    .then(response => {
      return response.data
    })
    .catch(err => {localStorage.clear()
      console.log(err)
    })
}
