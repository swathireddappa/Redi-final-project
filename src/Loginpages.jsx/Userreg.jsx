import React from 'react'

function Userreg() {

function submit(e){

    e.preventDefault()
    const name = e.target.name.value 
    const email = e.target.email.value 
    const number = e.target.contact.value 
    const indate = e.target.indate.value 
    const outdate = e.target.outdate.value 

    console.log(name, email , number,indate,outdate);

}


  return (
    <>
    
    
    <div>
        <h3>Please fill the below  " Details " ......</h3>

            <form  onSubmit={submit} action="">

                <input className='name' type="text" name="name" id="" placeholder='Enter your Name' />
               <input  className='email' type="email" name="email" id="" placeholder='Enter the Email-Id' />
               <input type="number" name='contact' id='' placeholder='Enter the contact number' />
               
                <input className='intime' type="datetime-local" name="indate" id="" placeholder='Enter the Check-In' />
                <input className='outime' type="datetime-local" name="outdate" id=""  placeholder='Enter the check-out date'/>

                <button >Submit</button>
                
                

            
            </form>
    </div>
     </>






  )
}

export default Userreg