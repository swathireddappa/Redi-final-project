import React   from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
 
  const navigate = useNavigate()

  function click(){

  navigate('/page2')  
}
function go(){

  navigate('/adminpage')
}

 /* useEffect(()=>{
    if(user){
      navigate('/page2')
    }
  },[])*/

  return (

    <div className='nav'>
      <div className="navbar bg-base-100">
  { <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Travel - App</a>
  </div> }
 
  {/* <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul className="p-2 bg-base-100">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div> */}
  <button className='btn-exp' onClick={click}>Explore</button>
    <ion-icon name="person" onClick={go} className="admin"></ion-icon>
      
</div>

      </div>
  )
}

export default Nav