import React from 'react'
import { Link } from 'react-router-dom'

function Barcpage() {



  return (
    <div>
         <h2 className='barche'>Barcelona</h2>
         <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/barcelona6.jpg?updatedAt=1686861494561" alt="" />
          <p className='pgdesc'>Barcelona is a city with a wide range of original leisur
          e options that encourage you again..</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/barcelona1.webp?updatedAt=1686861494893" alt="" />
          <p className='pgdesc'>Overlooking the Mediterranean Sea, and famous for Gaudí..</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/bercelona2.avif?updatedAt=1686861494920" alt="" />
          <p className='pgdesc'>Art Nouveau architecture, Barcelona is one of Europe's trendiest cities...</p>
        </div>
        



           <Link to ="/page2"><button  className='barcbtn'>Back</button></Link>
        </div>


    
  )
}

export default Barcpage