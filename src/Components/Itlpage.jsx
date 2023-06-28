import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Itlpage() {

const navigate = useNavigate()

  function click(){
    navigate('/userreg')
  }

  return (
    <>
    <div className='grow'>
      <h2 className='h2ita'>Italy</h2>

            <div className='prg1'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/italy1.jpg?updatedAt=1686860389793" alt="" />
        <p className='pgdesc'> Italy is a boot-shaped peninsula that juts out of southern Europe into the Adriatic Sea,
           Tyrrhenian Sea</p>
            </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/italy2.jpg?updatedAt=1686860389741" alt="" />
         <p className='pgdesc'>Mediterranean Sea, and other waters. Its location has played an
            important</p>

        </div>

      <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/italy5.jpg?updatedAt=1686860390703" alt="" />
            <p className='pgdesc'>Its location has played an
            important  role in its history. </p>
      </div>

      <div className='prg1'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/italy3.jpg?updatedAt=1686860389834" alt="" />
        <p className='pgdesc'>The sea surrounds Italy, and mountains crisscross the interior, dividing it into regions.</p>
      </div>
          
          <Link to='/page2'>

          <button className='italbak'>Back</button>
          </Link>
        
          <button onClick={click} className='book' > Book</button>
        </div>

    </>
    
  )
}

export default Itlpage