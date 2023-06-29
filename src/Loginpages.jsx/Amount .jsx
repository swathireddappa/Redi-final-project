import React from 'react'
import { Link } from 'react-router-dom'

function   amount({orders, setorders}) {

    
//     const navigate = useNavigate()
    
//     function home(){
//     navigate('/main')

// }

function remove (e){
    console.log(e);
    const result = orders.filter(i => i.id != e.id)
    setorders(result)

}

  return (
    <div className='amtdiv'>
          <h4>Amount collected</h4>

        {orders  && orders .map(i=> <div className='amnt'>
            <li>{i.name}
            <li>{i.cost}</li>

             <button onClick={() => remove(i)} >X</button></li>
        </div>)  }

        <Link to='/'>
        <button type='submit' className='home' >Home</button>

        </Link>

  
  
  
  
    </div>
  )
}

export default   amount