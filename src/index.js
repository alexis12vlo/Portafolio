import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './Nav.jsx'
import About from './About.jsx'
import Portada from './Portada.jsx'
import Skill from './Skill.js'
import Portafolio from './Portafolio.jsx'
import Contacto from './Contacto.jsx'
import './Portafolio.css'
import './About.css'
import './Skill.css'
import './Portada.css'
import './Contacto.css'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
  
    <Portada />
  <div className="header">
    <Nav/>
    <div className="container_nav">
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/Skill" element={<Skill />} />
      <Route path="/Proyecto" element={<Portafolio />} />
      <Route path="Contacto" element={<Contacto />} />
    </Routes>
     
 


      
    </div>
  </div>

 
  </Router>
);


