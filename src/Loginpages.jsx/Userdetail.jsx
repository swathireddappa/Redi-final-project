import React from 'react'


function Userdetail({orders}) {

  return (

    <div>
      <h3>User Details</h3>
       
       {/* {orders && orders.map(i=> 
      
       <li>{i.client}</li>)}
      
      {orders && orders.map(i=> <li>{i.amount} {i.phone}</li>)}
      {orders && orders.map(i=> <li>{i.date}</li>)} */}
      
        {orders && orders.map(i=> <div className='orders'   >
          <p> Name : {i.name}</p>
          <p> Phone :{i.Contact}</p>
          <p> Kids : {i.kids}</p>
          <p>Adults :{i.adults}</p>
          <p>Email : {i.email}</p>
          <p>Checkin : {i.Checkin}</p>
          <p>Checkout : {i.checkout}</p>
          <p>Cost : {i.cost}</p>
          <p>City : {i.city}</p>

          
        </div>)}

       </div>
  )

}

export default Userdetail