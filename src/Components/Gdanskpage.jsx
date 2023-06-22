
import React  from 'react'
import { useNavigate } from 'react-router-dom'

function Gdanskpage() {

    const navigate = useNavigate()

    function click(){
    navigate('/page2')

  }
  return (
    <div>

        <h2>Gdansk</h2>
      <div className="h-96 carousel carousel-vertical rounded-box">

       <div className="carousel-item h-96">
        <img src="https://ik.imagekit.io/8sp02fxgg/gdansk.jpg?updatedAt=1687177426964" />
        </div> 

         <div className="carousel-item h-96">
          <img src="https://ik.imagekit.io/8sp02fxgg/tricity2.jpg?updatedAt=1686831886233" />
        </div> 

         <div className="carousel-item h-96">
          <img src="https://ik.imagekit.io/8sp02fxgg/tricity3.jpg?updatedAt=1686831886059" />
          </div> 

        <div className="carousel-item h-96">
          <img src="https://ik.imagekit.io/8sp02fxgg/tricity5.jpg?updatedAt=1686831886339" />
         </div> 

      </div>
            <div className='gdnskpg'>
              <p className='pgdesc'>With a population of 470,621, Gdańsk is the
                 capital and largest city of the Pomeranian Voivodeship. 
                 It is Poland's principal seaport and the country's fourth-largest metropolitan area.
                </p>
                      <button onClick={click} className='gdbtn'>Back</button>
                      <button onClick={click} className='book' > Book</button>
            </div>
    </div>
  
  )
}

export default Gdanskpage