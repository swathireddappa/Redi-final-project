
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom'
import Page2 from './Components/Page2';
import {  useState,useEffect } from 'react';
import Munpage from './Components/Munpage';
import Itlpage from './Components/Itlpage';
import Barcpage from './Components/Barcpage';
import Pragpage from './Components/Pragpage';
import Gdanskpage from './Components/Gdanskpage';
import Swizpage from './Components/Parispage';
import Userreg from './Loginpages.jsx/Userreg';
import AdminPage from './Loginpages.jsx/AdminPage';
import Userdetail from './Loginpages.jsx/Userdetail';
import axios from 'axios';


function App() {
  const [user, setuser] = useState()
  const [city, setCity] = useState()
  const [places , setPlaces] =useState()
  const [orders , setorders] = useState()


  useEffect(()=> {
    axios("https://redi-finalproject-backend.onrender.com/places")
    .then(i => setPlaces(i.data))
    .catch(i => console.log(i))

    axios("https://redi-finalproject-backend.onrender.com/orders")
    .then(i=> setorders(i.data) )
    .catch(i=> console.log(i))


    },[])
    
    
    return (

  
      
      <div className="app  " >

        <Nav />
      
      
      <Routes>
      <Route path ='/'  element={<Main />}> </Route>
      <Route path ='/page2'  element={<Page2 user ={user} /> }> </Route>
      <Route path= '/munpage' element={<Munpage />}/> 
      <Route path ='/itlpage' element={<Itlpage />} />
      <Route path ='/barcpage' element={<Barcpage />}/>
      <Route path ='/pragpage' element ={<Pragpage />} />
      <Route path='/gdanskpage' element={<Gdanskpage />} />
      <Route  path ='/swizpage' element={<Swizpage />}/>
      <Route path= '/userreg' element={<Userreg setCity={setCity} />} />
      <Route path='/adminpage' element={<AdminPage />} />
      <Route path='/userdetail' element={<Userdetail orders={orders}   /> } />

      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
