import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Itlpage() {

const navigate = useNavigate()

  function click(){
    navigate('/userreg')
  }

  return (
    <div className='itapg'>
          <h2 className='h2ita'>Italy</h2>

        <div className='italyp'>

        <div className='itlimg1'>
        <img className='itl1' src="https://ik.imagekit.io/8sp02fxgg/italy1.jpg?updatedAt=1686860389793" alt="" />
        </div>

        <div className='itlimg2'>
          <img className='itl2' src="https://ik.imagekit.io/8sp02fxgg/italy2.jpg?updatedAt=1686860389741" alt="" />
        </div>

        <div className='itlimg3'>
          <img className='itl3' src="https://ik.imagekit.io/8sp02fxgg/italy5.jpg?updatedAt=1686860390703" alt="" />
        </div>

        </div>
    
          <p className='italp'>
          Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea,
           Tyrrhenian Sea, Mediterranean Sea, and other waters. Its location has played an
            important <br /> role in its history. 
          The sea surrounds Italy, and mountains crisscross the interior, dividing it into regions.
          </p>
          <br />
          <Link to='/page2'>

          <button className='italbak'>Back</button>
          </Link>
        
          <button onClick={click} className='book' > Book</button>
        </div>

    
  )
}

export default Itlpage