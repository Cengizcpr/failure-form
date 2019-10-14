import axios from 'axios'

export const failures = newFailures => {
  return axios
    .post('failures/fregister', {
        customer_name: newFailures.customer_name,
        failures_name: newFailures.failures_name,
        failures_species: newFailures.failures_species,
        price: newFailures.price,
        note: newFailures.note,

        brand_name: newFailures.brand_name
    })
    .then(response => {
      console.log('Registered')
    })
    
}
export const failureslist = failures => {
  return axios
  
    .get('failures/flist')
    
    .then(response => {
      return response.data
    })
    .catch(err => {localStorage.clear()
      console.log(err)
    })
}
