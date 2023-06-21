import React from 'react'

function Userreg() {

function submit(e){

    e.preventDefault()
    const name = e.target.name.value 
    const email = e.target.email.value 
    const number = e.target.contact.value 
    const indate = e.target.indate.value 
    const outdate = e.target.outdate.value 
    const city = e.target.city.value 

    console.log(name, email , number,indate,outdate , city);

}


  return (
    <>
    
    
    <div>
        <h3>Please fill the below  " Details " ......</h3>

            <form  onSubmit={submit} action="">

                <input className='name' type="text" name="name" id="" placeholder='Enter your Name' />
               <input  className='email' type="email" name="email" id="" placeholder='Enter the Email-Id' />
               <input type="number" name='contact' id='' placeholder='Enter the contact number' />
               <label htmlFor="">
                Enter the checkin date
               </label>
               <input type="date" name="indate" id="" />
               <label htmlFor="">
                Enter the checkout date
               </label>
               <input type="date" name="outdate" id="" />
                

                    

                <h4>Select the city</h4>
                <span>Munich</span>
                <input type="checkbox" name="city" id="" />
                <span>Italy</span>
                <input type="checkbox" name="city" id="" />
                <span>Barcelona</span>
                <input type="checkbox" name="city" id="" />
                <span>Prague</span>
                <input type="checkbox" name="city" id="" />
                <span>Gdansk</span>
                <input type="checkbox" name="city" id="" />
                <span>Paris</span>
                <input type="checkbox" name="city" id="" />
                

                


            
                <button >Submit</button>
            </form>
    </div>
     </>






  )
}

export default Userreg