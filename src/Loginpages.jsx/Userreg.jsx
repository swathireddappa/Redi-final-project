import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Userreg({setCity , city}) {

function submit(e){
    e.preventDefault()
    const a = e.target.kids.value 
    const b = e.target.adults.value
  
    const total =  Number(a) + Number (b) 

    const n = 70;
    const a1 = Number(a * n / 2) ;
    const b2 = Number(b * n) ;
     let cost = Number(a1) + Number(b2) ;
     

    const name = e.target.name.value 
    const email = e.target.email.value 
    const number = e.target.contact.value 
    const indate = e.target.indate.value 
    const outdate = e.target.outdate.value 
    
    
    // const city = e.target.city 
    // const i = e.target.italy.value
    // console.log(name, email , number,indate,outdate , total, city , cost )
    // console.log(i)
    axios.post("https://redi-finalproject-backend.onrender.com/orders",{
      name: name,
      email: email,
      Contact: number,
      kids : a,
      adults: b,
      Checkin: indate,
      checkout: outdate,
      cost: cost,
      city: city
    })
}

function changeCity (e) {
setCity(e.target.value)
}
const navigate =useNavigate()

function go(){
  navigate('/Thanku')
}
 
  return (
    <>
    
    
    <div>

      <div className='userreg'>

        <h3>Please fill the below  " Details " ......</h3> <br />

            <form  onSubmit={submit} action="">

             <input className='name' type="text" name="name" id="" placeholder='Enter your Name' /> <br />
             <input  className='email' type="email" name="email" id="" placeholder='Enter the Email-Id' /> <br />
             <input className='contact' type="number" name="contact" id='' placeholder='Enter the contact number' />
              
              <label htmlFor="" className='label'>
                Kids</label>

                <input type="number" name="kids" id="" className='label' />
                <label htmlFor="" className='label'>Adults</label>
                <input type="number" name="adults" id="" className='label' />

               <label htmlFor="" className='label'>
                Enter the checkin date
               </label>
               <input type="date" name="indate" id=""  />

               <label htmlFor="" className='label'>
                Enter the checkout date
               </label>
               <input type="date" name="outdate" id=""  />
                

                <h4>Select the city</h4>
                <div className='input'>

                <label htmlFor="munich">Munich
                <input type="checkbox" name="city" id="munich"  />
                </label>
                
                <label htmlFor="">
                Italy
                <input type="checkbox" name="italy" id="" value="italy" onChange={(c) => changeCity(c)} />
                </label>
                
               <label htmlFor="Barcelona">
                Barcelona
                <input type="checkbox" name="city" id="" value="barcelona" onChange={(c) => changeCity(c)} />
               </label>

                <label htmlFor="">
                  Prague
                <input type="checkbox" name="city" id="" value="prague" onChange={(c) => changeCity(c)} />
                  </label>
                  
             <label htmlFor="">
              Gadansk
                <input type="checkbox" name="city" id=""  value="gdansk" onChange={(c) => changeCity(c)} />
             </label>

               <label htmlFor="">
                  Paris
                <input type="checkbox" name="city" id="" value="paris" onChange={(c)=> changeCity(c)} />
               </label>
                    </div>
            
                <button className='submit'  onClick={go}  >Submit</button>
              
            </form>
              </div>

    </div>
     </>






  )
}

export default Userreg