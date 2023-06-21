import React from 'react'
import {Link} from 'react-router-dom'

function Munpage() {
  return (
    <div>
        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/munich2.webp?updatedAt=1686827607858" alt="" />
          <p className='pgdesc'>It is Bavaria's largest city 
          and the third largest city in Germany (after Berlin and Hamburg)..</p>
        </div>

        <div className='prg2'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/mun.jpg?updatedAt=1687177946704" alt="" />
          <p className='pgdesc'> Munich, by far the largest city in southern Germany, lies about 30 miles
            </p>
        </div>

        <div className='prg2'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/munich3.webp?updatedAt=1686828644798" alt="" />
            <p className='pgdesc'>(50 km) north of the edge of the Alps and along the Isar River.
            which flows through the middle of the city.</p>
          </div>

          <Link to="/" ><button className="mchhme">Return</button></Link>
    </div>
  )
}

export default Munpage