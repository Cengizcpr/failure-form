import axios from 'axios'

export const failures = newFailures => {
  return axios
    .post('failures/fregister', {
        customer_name: newFailures.customer_name,
        failures_name: newFailures.failures_name,
        failures_species: newFailures.failures_species,
        price: newFailures.price,
        note: newFailures.note,
        failuresstate:newFailures.failuresstate,
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
export const failuresupdate = failures => {
  return axios
  
 .put('failures/flist',
  {
    customer_name: failures.customer_name,
    failures_name: failures.failures_name,
    failures_species: failures.failures_species,
    price: failures.price,
    note: failures.note,
    brand_name: failures.brand_name,
    failuresstate:failures.failuresstate,

      _id:failures._id

      
})
.then(response => {
  console.log('Updated')
})

}
export const failuresdeletes = failures => {
  return axios
  
 .post('failures/flist',
  {_id:failures._id
   
  } )
  .then(response=>{
    return response
  })

}