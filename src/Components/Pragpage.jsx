import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Pragpage() {

const navigate = useNavigate()


  function click(){
    navigate('/userreg')
  }


  return (
    <div>
      <h2>Prague</h2>
      <div className='pragp'>

       <div className='grow'>


        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague4.jpg?updatedAt=1686833339415" alt="" />
          <p className='pgdesc'>Prague is the capital and the largest 
            city of the Czech Republic situated in the
             middle of Bohemia on the Vltava River.</p>
        </div>

        <div className='prg1'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague1.webp?updatedAt=1686833339504" alt="" />
          <p className='pgdesc'> It took the city eleven centuries to get the look we know today. </p>
        </div>

          <div className='prg1'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prague5.jpg?updatedAt=1686833339331" alt="" />
            <p className='pgdesc'>Nowadays it covers an area of 496 square kilometres 
            and has about 1 240 000 inhabitants.</p>
          </div>
          <div className='prg1'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/prg.jpg?updatedAt=1687175771155" alt="" />
            <p className='pgdesc'>Prague, Czech Praha, city, capital of the Czech Republic.</p>

          </div>

          <Link to="/page2" className="mchhme">Return</Link>
          <button onClick={click} className='book' > Book</button>


       </div>
       </div>
      </div>

  )
}

export default Pragpage