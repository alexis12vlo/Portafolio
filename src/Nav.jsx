import {BsFileEarmarkPersonFill} from 'react-icons/bs'
import {BiCategoryAlt} from 'react-icons/bi'
import {MdWeb} from 'react-icons/md'
import {MdOutlineContactMail} from 'react-icons/md'
import {Link } from 'react-router-dom';






function Nav() {
  return (
    <div className="Nav">
     <nav className="menu">

          <Link className="Links_Nav" to="/"><BsFileEarmarkPersonFill className="NavIcon"/>Acerca de Mi</Link>
          <Link className="Links_Nav"  to="/Skill"><BiCategoryAlt className="NavIcon"/>SKILL</Link>
          <Link className="Links_Nav"  to="/Proyecto"><MdWeb className="NavIcon"/>Proyectos</Link>
          <Link className="Links_Nav"  to="/Contacto"><MdOutlineContactMail className="NavIcon"  />Contacto</Link>   
    </nav>
    <div className=""></div>
    </div>
  );
}

export default Nav;