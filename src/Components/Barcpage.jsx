import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Barcpage() {

  const navigate = useNavigate()
  function click(){
    navigate('/userreg')
  }

  return (

   <>
    <h2>Barcelona </h2>
       <div className='grow'>

         <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/barcelona6.jpg?updatedAt=1686861494561" alt="" />
          <p className='pgdesc'>Barcelona is a city with a wide range of original leisur
          e options that encourage you again..</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/barcelona1.webp?updatedAt=1686861494893" alt="" />
          <p className='pgdesc'>Barcelona is the largest city on the Mediterranean coast.....</p>
        </div>

          <div className='prg1'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/barcelona6.jpg?updatedAt=1686861494561" alt="" />
            <p className='pgdesc'>Overlooking the Mediterranean Sea, and famous for Gaudí.</p>

          </div>


        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/bercelona2.avif?updatedAt=1686861494920" alt="" />
          <p className='pgdesc'>Art Nouveau architecture, Barcelona is one of Europe's trendiest cities...</p>
        </div>
        <Link to="/page2" ><button className="mchhme">Return</button></Link>

      <img className='trip' src="https://ik.imagekit.io/8sp02fxgg/summer.jpg?updatedAt=1687939738426" alt="" />
        
        <button onClick={click} className='book' > Book</button>
           
        </div>

       </>

    
  )
}

export default Barcpage