import React from 'react'
import { useNavigate } from 'react-router-dom'


function Main() {

const navigate = useNavigate()
function start(){
  navigate('/page2')
}

  return (
    <div className='main  grow'>Welcome to the Page
    
   <img className='mainimage' src="https://img.freepik.com/premium-vector/traveling-car-illustration_126895-245.jpg?w=360" alt="" />
    
   <button className='start' onClick={start}>Start</button>

    </div>


    



  )
}

export default Main