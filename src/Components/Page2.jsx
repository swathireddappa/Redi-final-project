import React   from 'react'
import { Link } from 'react-router-dom'


function Page2() {
    
   
  return (


    <div className="image">
        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/mun.jpg?updatedAt=1687177946704" alt="" />
        <Link to ='/Munpage' ><button className="munich">Munich</button></Link>
        </div>
        
        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/itl.webp?updatedAt=1687174954380" alt="" />
        <Link to='/itlpage'> <button className="italy">Italy</button></Link>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/barv.jpg?updatedAt=1687175583465" alt="" />
        <Link to='/Barcpage'><button className='barcelona'> Barcelona</button></Link>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/prg.jpg?updatedAt=1687175771155" alt="" />
        <Link to='/Pragpage'><button className='prague'>Prague</button></Link>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/gdansk.jpg?updatedAt=1687177426964" alt="" />
        <Link to='/Gdanskpage'><button className='gdansk'>Gadansk</button></Link>
        </div>

        <div>
        <img src="https://ik.imagekit.io/8sp02fxgg/switz.jpg?updatedAt=1687177601264" alt="" />
        <Link  to='/Swizpage'><button className='switz'>SwitzerLand</button></Link>
        </div>


           


    </div>

    
  )
}

export default Page2