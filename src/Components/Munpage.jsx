import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Munpage() {

  const navigate = useNavigate()
 
  function click(){
    navigate('/userreg')
  }

  return (
    <div className='grow'>
        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/munich2.webp?updatedAt=1686827607858" alt="" />
          <p className='pgdesc'>It is Bavaria's largest city 
          and the third largest city in Germany (after Berlin and Hamburg)..</p>
        </div>

        <div className='prg1'>
        <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/mun.jpg?updatedAt=1687177946704" alt="" />
          <p className='pgdesc'> Munich, by far the largest city in southern Germany, lies about 30 miles
            </p>
        </div>

        <div className='prg1'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/munich3.webp?updatedAt=1686828644798" alt="" />
            <p className='pgdesc'>(50 km) north of the edge of the Alps and along the Isar River.
            which flows through the middle of the city.</p>
          </div>

          <div className='prg1'>
            <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/munich5.jpg?updatedAt=1686828644597" alt="" />
            <p className='pgdesc'>A city with a big heart, as suave as it is easygoing, buzzing and yet tranquil.</p>

          </div>

          <Link to="/page2" ><button className="mchhme">Return</button></Link>

          <img className='trip' src="https://ik.imagekit.io/8sp02fxgg/trip1.jpg?updatedAt=1687871218042" alt="" />
              
              <button onClick={click} className='book' > Book</button>

    </div>
  )
}

export default Munpage