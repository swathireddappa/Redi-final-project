import React from 'react'
import {Link , useNavigate} from 'react-router-dom'

function Parispage() {



  const navigte = useNavigate()
  function click(){
    navigte('/userreg')
  }

  return (
    <div>
            <h2>Paris</h2>
            <div className='grow'>

            <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/paris1.webp?updatedAt=1686862851956" alt="" />
          <p className='pgdesc'>Paris (nicknamed the "City of light") is the capital city 
          of France, and the largest city in France...</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/paris6.webp?updatedAt=1686862851960" alt="" />
          <p className='pgdesc'>The area is 105 square kilometres 
          (41 square miles), and around 2.15 million people..</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/paris5.jpg?updatedAt=1686862851839" alt="" />
          <p className='pgdesc'>If suburbs are counted, 
          the population of the Paris area rises to 10.7 million people...</p>
        </div>

        <div className='prg1'>
          <img className='imgp2' src="https://ik.imagekit.io/8sp02fxgg/paris2.webp?updatedAt=1686862851995" alt="" />
          <p className='pgdesc'>Paris is known for its gorgeous, imposing monuments. ...</p>

        </div>

        <Link to="/page2" ><button className="mchhme">Return</button></Link>
              
              
              <button onClick={click} className='book' > Book</button>
            </div>
            </div>
  )
}

export default Parispage