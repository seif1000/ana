import contact from "../asset/contact.png" ;
import project from "../asset/rocket.png";
import rocket from "../asset/cv.png";
import user from "../asset/user.png" ;
import seif from '../asset/seif.jpg' ;
import musc from "../asset/biceps.png";
import React from "react" ;
import { Link,  animateScroll as scroll } from 'react-scroll'
const ShowCase =()=> {
    return (
        <div className="container">
             <div className="showcase">
                <div className="base">
                    <div className="bars">
                        <div className="bar bar1"></div>
                        <div className="bar bar2"></div>
                        <div className="bar bar3"></div>
                    </div>
                    
                    <div className="icone icone-1"><a target="_blank" href="https://drive.google.com/file/d/1AfY_45vHCr9z_QpYp5Ez4IwfLCPAnhG6/view?usp=sharing"><img src={rocket} /></a></div>
                    <Link activeClass="active" to="Skills" spy={true} smooth={true} duration={250}>
                    <div className="icone icone-2"><img src={user} /></div>
                    </Link>
                    <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={250}>
                    <div className="icone icone-3"><img src={project} /></div>
                    </Link>
                   
                     <Link activeClass="active" to="Footer" spy={true} smooth={true} duration={250}>
                     <div className="icone icone-4"><img src={contact} /></div>
                     </Link>
                    
                </div>
                <div className="About">
                     <img src={seif}/>
                     <p className="name"><span>Benmazouz</span> Seif Eddine</p>
                     <p className="role">Full-stack developer <img src={musc}/></p>
                     <p className="desc">I am full-stack developer and android developer from algeria ,I have bachlor's degree in computer scienc,passionat about learning and technologies.</p>
                   <Link className="check-work"  activeClass="active" to="Projects" spy={true} smooth={true} duration={250}> 
                    <div className="check">
                        <p>check my work</p>
                    </div >
                  </Link>
                </div>
                
            </div>
            <div className="skills">
                      <div><i class="fab fa-html5"></i></div>
                      <div><i class="fab fa-css3-alt"></i></div>
                      <div><i class="fab fa-sass"></i></div>
                      <div><i class="fab fa-js"></i></div>
                      <div><i class="fab fa-react"></i></div>
                      <div><i class="fab fa-node-js"></i></div>
                      <div><i class="fab fa-java"></i></div>
                     
                </div>
        </div>
       
      
    )
}

export default ShowCase ;
