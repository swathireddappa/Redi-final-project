import React from 'react'

function Barcpage() {
  return (
    <div>
         <h2 className='barche'>Barcelona</h2>
        <div className='barce'>
          <img className='barc1' src="https://ik.imagekit.io/8sp02fxgg/barcelona1.webp?updatedAt=1686861494893" alt="" />
          <img className='barc2' src="https://ik.imagekit.io/8sp02fxgg/bercelona2.avif?updatedAt=1686861494920" alt="" />
          <img className='barc3' src="https://ik.imagekit.io/8sp02fxgg/barcelona6.jpg?updatedAt=1686861494561" alt="" />
        </div>

        <div className='barcdes'>
          <p>
          Barcelona is a city with a wide range of original leisure options that 
          encourage you to visit time and time again. Overlooking the Mediterranean Sea, 
          and famous for Gaudí and other Art Nouveau architecture, 
          Barcelona is one of Europe's trendiest cities.
          </p>
          <button className='barcbtn'>Back</button>
        </div>


    </div>
  )
}

export default Barcpage