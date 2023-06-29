import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Dashboard() {

const navigate = useNavigate()

function places(){
   navigate('/page2')

} 
function order(){
    navigate('/userdetail')

}   


  return (
    <div className='dashboard'>

        <button onClick={places}  className='btnplc'>Places</button>
        <button onClick={order}  className='btnplc'>Orders</button>
       <Link to='/amount'> <button className='btnplc'>Amount</button></Link>
    </div>
  )
}

export default Dashboard