
import './App.css';
import Footer from './Components/Footer';
import Main from './Components/Main';
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom'
import Page2 from './Components/Page2';
import { useState } from 'react';


function App() {
  const [user, setuser] = useState()

  
  return (
    <div className="app">

        <Nav />
      
      <Routes>
      <Route path ='/'  element={<Main />}> </Route>
      <Route path ='/page2'  element={<Page2 user ={user}/>}>

        </Route>
      </Routes>

      <Footer></Footer>


    </div>
  );
}

export default App;
