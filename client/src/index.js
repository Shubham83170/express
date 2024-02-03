import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Loginpage from './Modules/auth/Login';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Landingpage from './Modules/dashboard/Landingpage';
import Navbar from './Modules/shares/Navbar';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Loginpage/>}/>
      <Route path='mydasboard' element={<Landingpage/>}/>

     
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);


