import React from 'react'


function Userdetail({orders}) {

  return (

    <div>Userdetail 
       

       {orders && orders.map(i=>
      
       <li>{i.client}</li>)}
      
      {orders && orders.map(i=> <li>{i.amount} {i.phone}</li>)}
      
       </div>
  )

}

export default Userdetail