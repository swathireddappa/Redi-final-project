import React from 'react'
import { useNavigate } from 'react-router-dom'


function Main() {

const navigate = useNavigate()
function start(){
  navigate('/page2')
}

  return (
    <div className='main  grow'>
      <h1>Welcome to Travel App</h1>
    
   <img c src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190425170948/friends-on-road-trip.jpg" alt="" />
    
   <button className=' start'  onClick={start}>Start</button>

    </div>


    



  )
}

export default Main