import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import {FaFacebookF} from "react-icons/fa";
import { useSpring, animated ,to } from "react-spring";
import { useGesture } from 'react-use-gesture';
import React , { useState ,useRef, useEffect } from 'react';
import styles from './Portada';
import pdf from './cv.pdf'
import fondo from './fondo2.jpg'
import {IoIosArrowDropdown} from 'react-icons/io'



const calcX = (y: number, ly: number) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x: number, lx: number) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y: number) => {
  const imgHeight = window.innerWidth * 0.3 - 20
  return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}


function Portada() {

  const [Scroll, setScroll] = useState("Scroll");
const handleScroll = () => setScroll("NuleScroll")
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, []);
  useEffect(() => {

    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener('gesturestart', preventDefault)
    document.addEventListener('gesturechange', preventDefault)

    return () => {
      document.removeEventListener('gesturestart', preventDefault)
      document.removeEventListener('gesturechange', preventDefault)
    }
  },)

  const domTarget = useRef(null)
  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 15, tension: 250, friction: 40 },
    })
  )

  const [{ wheelY }, wheelApi] = useSpring(() => ({ wheelY: 0 }))

  useGesture(
    {
      onDrag: ({ active, offset: [x, y] }) =>
        api({ x, y, rotateX: 0, rotateY: 0, scale: active ? 1 : 1.1 }),
      onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
      onMove: ({ xy: [px, py], dragging }) =>
        !dragging &&
        api({
          rotateX: calcX(py, y.get()),
          rotateY: calcY(px, x.get()),
          scale: 1.1,
        }),
      onHover: ({ hovering }) =>
        !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),
      onWheel: ({ event, offset: [, y] }) => {
        event.preventDefault()
        wheelApi.set({ wheelY: y })
      },
    },
    { domTarget, eventOptions: { passive: null } }
  )
  function Scrolll(){

    setScroll("Scroll")


  }
    function Scrollll(){

    setScroll("Scroll_Nule")


  }


  return (
    <div  className="Portada">
    <div className="Portada_Container">
      <div onMouseEnter={Scrolll} className="Negro">
      <img src={fondo} /></div>

      <IoIosArrowDropdown className={Scroll}/>

      <div onMouseEnter={Scrollll} className="Portada_Container_Fondo">
      <animated.div
        ref={domTarget}
        className={styles.card}
        style={{
          transform: 'perspective(600px)',
          x,
          y,
          scale: to([scale, zoom], (s, z) => s + z),
          rotateX,
          rotateY,
          rotateZ,
        }}>
        <div className="Fondo">
          <div className="Fondo_Nombre">
              <div className="Fondo_Nombre_Foto">
                  <img src={require('./Portada.png')} alt=""/>
              </div>
              <div>

                <h1 className="Nombre">ALEXIS LUJAN</h1>

                <h2>Desarrollador Full Stack</h2>
              </div>  

          </div>
          <div className="Fondo_Boton">
            <div className="Fondo_Boton_CV">

                <a href={pdf} target="_blank" rel="noopener noreferrer"><button className="Boton_CV"><FaCloudDownloadAlt className="Des"/> Download CV</button></a>
               
            </div>
            <div className="Fondo_Links">
                <a target="_blank"  className="Links" href="https://www.facebook.com/alexis.lujanoruna"><FaFacebookF className="Link"/></a>
                <a target="_blank"  className="Links" href="https://github.com/alexis12vlo"><FaGithub className="Link"/></a>
                <a target="_blank"  className="Links" href="https://www.instagram.com/alexislujan_s.w/?hl=es-la"><FaInstagram className="Link"/></a>
                <a target="_blank"  className="Links" href="https://twitter.com/AlexisOruna"><FaTwitter className="Link"/></a>
                <a target="_blank"  className="Links" href="https://www.linkedin.com/in/alexis-lujan-221a2221a/"><FaLinkedin className="Link"/></a>

            </div>

          </div>

        </div>
        </animated.div>
      </div>
    </div>

  </div>
  );
}

export default Portada;