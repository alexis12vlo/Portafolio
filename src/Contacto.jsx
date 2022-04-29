import {BsTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md"
import {IoDesktopSharp} from "react-icons/io5"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import React, { useState } from 'react';




function Contacto(){
    const [Send, setSend] = useState("Enviar");
    const [Style, setStyle] = useState("ButtonInputStyle");

    function Click(){

      setSend("Enviado");
      setStyle("Style")

  
    }
    return (


      <div className="Contacto">

      <div className="Contacto_Container">
        <div className="Contacto_Container_Header">
          <div className="Contacto_Container_Header_1">
              <div className="Contacto_Container_Header_p">
              <br/>
              <p>C</p>
              </div>
              <div className="Contacto_Container_Header_h1">
              <h1>Contacto</h1>

              </div>
              

                  
          </div>


        </div>
        <div className="Contacto_Container_Me">
                <div className="Contacto_Container_Me_Items">
                  <div className="Contacto_Container_Me_Items_Card">
                    <div className="Phone">
                      <h1><BsTelephoneFill  className="IconContact" />TELEFONO</h1>
                      <p>+51 942338673</p>

                    </div>
                  </div>
                  <div className="Contacto_Container_Me_Items_Card">
                    <div className="Phone">
                      <h1><MdEmail className="IconContact" />E-MAIL</h1>
                      <p>alexi12vlo@gmail.com</p>
                      <p>valujano@unac.edu.pe</p>

                    </div>
                  </div>
                  <div className="Contacto_Container_Me_Items_Card">
                    <div className="Phone">
                      <h1><IoDesktopSharp className="IconContact" />WEB SITE</h1>
                      <p>+51 942338673</p>

                    </div>
                  </div>


                </div>

          </div>

              <div className="Contacto_Container_Contact">
                <div className="Contacto_Container_Input">
                  <div className="Contacto_Container_Input_Cards">
                    <input  placeholder="Correo" type="text" className="Correo"/>
                    <input placeholder="Nombre" type="text" className="Nombre"/>
                    <input placeholder="Mensaje" type="text" className="Mensage"/>
                  </div>
                  <div className="ButtonInput">
                    <button onClick={Click} className={Style}>{Send}</button>

                  </div>
                </div>
                 <div className="Contacto_Container_Contact_Redes">
                  <div className="Contacto_Container_Contact_Redes_Titulo">
                      
                      <h2>Redes</h2>

                  </div>
                  <div className="Contacto_Container_Contact_Redes_Cards">
                          <a target="_blank"  className="Links" href="https://www.facebook.com/alexis.lujanoruna"><FaFacebookF className="LinkFooter"/></a>
                          <a target="_blank"  className="Links" href="https://github.com/alexis12vlo"><FaGithub className="LinkFooter"/></a>
                          <a target="_blank"  className="Links" href="https://www.instagram.com/alexislujan_s.w/?hl=es-la"><FaInstagram className="LinkFooter"/></a>
                          <a target="_blank"  className="Links" href="https://twitter.com/AlexisOruna"><FaTwitter className="LinkFooter"/></a>
                          <a target="_blank"  className="Links" href="https://www.linkedin.com/in/alexis-lujan-221a2221a/"><FaLinkedin className="LinkFooter"/></a>

                  </div>
                </div>

              </div>
              </div>
        


      
    </div>

      );




}
export default Contacto;