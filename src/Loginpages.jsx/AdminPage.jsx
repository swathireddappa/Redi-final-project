import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminPage() {

    const [orders, setorders] = useState()

    const navigate = useNavigate()

        function submit(e){
    
            e.preventDefault()
            // const email = e.target.email.value
            // const password = e.target.password.value
            // console.log(email);
            // console.log(password);
            
            // const person = orders.find( i=> i.email === email)
            // if(person) {
            //     console.log("person found .");
            //     console.log(person);
            //     if(person.pass === password) {
            //         setorders(person);
            //    console.log("you can login");
            //  }else {
            //    console.log("password is wrong");
            //  }
            //  }else {
            //      console.log("person not found");
            //     }    


            navigate('/dashboard')
            }
            
             return (

             <div className='adminpage'>
        
              
            <form   onSubmit={submit} action="">
             <input className='label' type="email" name="email" id="email" placeholder='Enter the Email' />

            <input className='label' type='password' name="password" id="pass"  placeholder='Enter the password'/>

                <button type='submit'>Login</button>
              </form>



    </div>
  )
}

export default AdminPage