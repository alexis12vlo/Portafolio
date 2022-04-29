

 

function About() {
  return (
    <div className="About">

      <div className="About_Container">
        <div className="About_Container_Header">
          <div className="About_Container_Header_1">
              <div className="About_Container_Header_p">
              <p>A</p>
              </div>
              <div className="About_Container_Header_h1">
              <h1>Acerca de Mi</h1>

              </div>
               

                  
          </div>

        </div>
        <div className="About_Container_Text">
          <div className="About_Container_Text_1">
            <div className="image">
              <div>
                <img src={require('./foto2.png')} alt=""/>
              </div>  
            </div>
            <div className="About_Text">
              <div>
                <h2>ALEXIS LUJAN</h2>
                <h3>DESARROLLADOR FULL STACK</h3>
              </div>
              <div>
                <h3>Recidencia:<p>LIMA-PERU</p></h3>
                <h3>Profesion:<p>INGENIERIA DE SISTEMAS</p></h3>
                <h3>Linkendin:<br/><br/><a target="_blank" href="https://www.linkedin.com/in/alexis-lujan-221a2221a/">https://www.linkedin.com/in/alexis-lujan-221a2221a/</a></h3>
                <h3>Intereses:<p>Desarrollo Full Stack</p><p>Desarrollo Frontend</p><p>Startup</p></h3>
              </div> 
        
            </div>

          </div>

        </div>




      </div>
    </div>
  );
}

export default About;