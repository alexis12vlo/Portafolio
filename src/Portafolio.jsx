
import {Carousel} from "react-responsive-carousel";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import final from './Final.gif'
import proyecto1 from './proyecto1.gif'
import proyecto2 from './proyecto2.gif'
import proyecto3 from './proyecto3.gif'
import proyecto5 from './proyecto5.gif'

import {BsGithub} from "react-icons/bs"

function Portafolio() {
  return (
    <div className="Portafolio">

      <div className="Portafolio_Container">
        <div className="Portafolio_Container_Header">
          <div className="Portafolio_Container_Header_1">
              <div className="Portafolio_Container_Header_p">
              <p>P</p>
              </div>
              <div className="Portafolio_Container_Header_h1">
              <h1>Proyectos</h1>

              </div>
               

                  
          </div>

        </div>
        <div className="Portafolio_Container_Text">
            <Carousel >
                <div>
                    <img src={proyecto5} />

                    <a target="_blank" href="https://github.com/alexis12vlo/PokedexApi"><p className="legend"><BsGithub className="Git_boton"/>GitHub</p></a>
                         

                </div>
                <div>
                    <img src={proyecto2} />
                   <a target="_blank" href="https://github.com/alexis12vlo/CAR-MOTOR"><p className="legend"><BsGithub className="Git_boton"/>GitHub</p></a>
                </div>
                <div>
                    <img src={proyecto3}/>
                    <a target="_blank"  href="https://github.com/alexis12vlo/InCorpo-Page"><p className="legend"><BsGithub className="Git_boton"/>GitHub</p></a>
                </div>
                <div>
                    <img src={proyecto1} />
                    <a target="_blank"  href="https://github.com/alexis12vlo/Cafe-Cafe"><p className="legend"><BsGithub className="Git_boton"/>GitHub</p></a>
                </div>
                <div>
                    <img src={final} />
                    <a target="_blank" href="https://github.com/alexis12vlo/Final"><p className="legend"><BsGithub className="Git_boton"/>GitHub</p></a>
                </div>
         
                  
            </Carousel>

        </div>




      </div>
    </div>
  );
}

export default Portafolio;