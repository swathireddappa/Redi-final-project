import React   from 'react'
import { Link } from 'react-router-dom'


function Page2() {
    
   
  return (


    <div className="image">
        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/mun.jpg?updatedAt=1687177946704" alt="" />
        <Link to ='/Munpage' className="munich">Munich</Link>
        </div>
        
        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/itl.webp?updatedAt=1687174954380" alt="" />
        <Link to='/itlpage' className="italy" >Italy</Link>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/barv.jpg?updatedAt=1687175583465" alt="" />

         <button className='barcelona'> Barcelona</button>

        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/prg.jpg?updatedAt=1687175771155" alt="" />
        <button className='prague'>Prague</button>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/gdansk.jpg?updatedAt=1687177426964" alt="" />
       <button className='gdansk'>Gadansk</button>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/switz.jpg?updatedAt=1687177601264" alt="" />
        <button className='switz'>SwitzerLand</button>
        </div>


           


    </div>

    
  )
}

export default Page2