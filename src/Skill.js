import { DiHtml5} from "react-icons/di";
import {DiCss3} from "react-icons/di"
import {FaReact} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {DiNodejs} from "react-icons/di"
import {FaGitSquare} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {SiRedux} from "react-icons/si"

function Skill(){

    return (


      <div className="Skill">

      <div className="Skill_Container">
        <div className="Skill_Container_Header">
          <div className="Skill_Container_Header_1">
              <div className="Skill_Container_Header_p">
              <br/>
              <p>S</p>
              </div>
              <div className="Skill_Container_Header_h1">
              <h1>Skill</h1>

              </div>
               

                  
          </div>

        </div>
        <div className="Skill_Container_Skills">
            <div className="Skill_Container_Skill">
              <div className="Skill_ ">
                <div className="Html">

                  <DiHtml5 className="Hsvg"/>
                  <h1>HTML</h1>

                </div>

              </div>
               <div className="Skill_">
               <div className="Css">

               <DiCss3 className="Hsvg"/>
                  <h1>CSS</h1>
                </div>

              </div>
               <div className="Skill_">
                <div className="React">
                <FaReact className="Hsvg"/>
                  <h1>REACT</h1>
                </div>

              </div>
               <div className="Skill_">
                <div className="Js">
                <SiJavascript className="Hsvg"/>
                  <h1>JAVASCRIPT</h1>
                </div>

              </div>
              <div className="Skill_">
                <div className="Redux">
                  <SiRedux className="Hsvg"/>
                  <h1>REDUX</h1>
                </div>

              </div>
               <div className="Skill_">
                <div className="Node">
                <DiNodejs className="Hsvg"/>
                  <h1>NODE JS</h1>
                </div>

              </div>
               <div className="Skill_">
                <div className="Git">
                <FaGitSquare className="Hsvg"/>
                  <h1>GIT</h1>
                </div>

              </div>
               <div className="Skill_">
                <div className="Git_Hub">
                <BsGithub className="Hsvg"/>
                  <h1>GITHUB</h1>
                </div>

              </div>
              


            </div>


        </div>  


      </div>
    </div>

      );




}
export default Skill;