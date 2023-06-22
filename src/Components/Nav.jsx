import React   from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
 
  const navigate = useNavigate()

  function click(){

  navigate('/page2')
  navigate('/adminpage')
   
  }

 /* useEffect(()=>{
    if(user){
      navigate('/page2')
    }
  },[])*/

  return (

    <div className='nav'>
    <button className='btn-exp' onClick={click}>Explore</button>

    <ion-icon name="person" onClick={click} className="admin"></ion-icon>
      
      </div>
  )
}

export default Nav