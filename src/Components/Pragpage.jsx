import React from 'react'
import { Link } from 'react-router-dom'

function Pragpage() {
  return (
    <div>
      <h2>Prague</h2>
      <div className='pragp'>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague4.jpg?updatedAt=1686833339415" alt="" />
          <p className='pgdesc'>Prague is the capital and the largest 
            city of the Czech Republic situated in the
             middle of Bohemia on the Vltava River.</p>
        </div>

        <div className='prg2'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague1.webp?updatedAt=1686833339504" alt="" />
          <p className='pgdesc'> It took the city eleven centuries to get the look we know today. </p>
        </div>

          <div className='prg2'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague5.jpg?updatedAt=1686833339331" alt="" />
            <p className='pgdesc'>Nowadays it covers an area of 496 square kilometres 
            and has about 1 240 000 inhabitants.</p>
          </div>

          <Link to="/" className="prrtbtn">Return</Link>


       </div>
      </div>

  )
}

export default Pragpage