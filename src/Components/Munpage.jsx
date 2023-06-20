import React from 'react'

function Munpage() {
  return (
    <div className='munpage'>
        <h2>Munich</h2>
        <div >
        <img className="mchimg1" src="https://ik.imagekit.io/8sp02fxgg/munich2.webp?updatedAt=1686827607858" alt="" />
        <p className='mchpara'>Munich is the capital and largest city of the German state of
         Bavaria, on the banks of the River Isar, north of the Bavarian Alps.
           </p>
        </div>

        <div className='mchimg2'>
         <img className='img2'  src="https://ik.imagekit.io/8sp02fxgg/munich4.png?updatedAt=1686828644987" alt="" />
         <p className='mchpara2' >Munich is the third largest city in Germany, after Berlin and Hamburg, 
        with a population ...</p>
        </div>
            
        <div className='mchimg3'>
        <p className='mchpara3'>The Munich Metropolitan
         Region is home to 5.6 million ...</p>
        <img className='img3' src="https://ik.imagekit.io/8sp02fxgg/munich3.webp?updatedAt=1686828644798" alt="" />
        </div>

         <button className='mchhme'>Home</button>

         <button >Book</button>
    </div>
  )
}

export default Munpage