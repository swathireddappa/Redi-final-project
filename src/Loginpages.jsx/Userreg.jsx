import React from 'react'

function Userreg() {

  return (
    <>
    
    
    <div>
        <h3>Please fill the below  " Details " ......</h3>

            <form  action="">

                <input className='name' type="text" name="" id="" placeholder='Enter your Name' />
               <input  className='email' type="email" name="" id="" placeholder='Enter the Email-Id' />
               <input type="number" id='' placeholder='Enter the contact number' />
                <input className='intime' type="datetime-local" name="" id="" placeholder='Enter the Check-In' />
                <input className='outime' type="datetime-local" name="" id=""  placeholder='Enter the check-out date'/>

                <button type="submit">Submit</button>
                

            
            </form>
    </div>
     </>






  )
}

export default Userreg