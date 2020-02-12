import React, {useState}from 'react'

export default function Project() {
    const [stack,setStack] = useState("full") ;

    const onchangeHandler =(e)=>{
         const {name,value} = e.target;
         setStack(value);
    }

    return (
    <div className="Projects">
        <p>My recent Work</p>
        <div classNam="wraper">
                <input class="radio" id="one" name="group"  value="react" type="radio" checked={stack==="react"} onChange={onchangeHandler}/>
                <input class="radio" id="pre" name="group"  value="html" type="radio" checked={stack==="html"} onChange={onchangeHandler}/> 
                <input class="radio" id="two" name="group" value="full"  type="radio" checked={stack==="full"}onChange={onchangeHandler}/>
                <input class="radio" id="three" name="group" value="android" type="radio" checked={stack==="android"}onChange={onchangeHandler}/>
                <div class="tabs">
                    <label class="tab" id="one-tab" for="one">React</label>
                    <label class="tab" id="pre-tab" for="pre">Html/CSS</label>
                    <label class="tab" id="two-tab" for="two">Full-Stack</label>
                    <label class="tab" id="three-tab" for="three">android</label>
                </div>
                <div class="panels">
                <div class="panel" id="pre-panel">
                <div className="project">
                                <div className="proc html-one">
                                   
                                <a href="https://github.com/seif1000/crispy-parakeet" class="git"target='_blank'>Github</a>
                                <a href="https://seif1000.github.io/crispy-parakeet/"target='_blank'>project</a>
                 
                                  
                                </div>
                                
                        </div>
                </div>
                    <div class="panel" id="one-panel">
                   
                        <div className="project">
                                <div className="proc react-one">
                                     
                                <a href="https://github.com/seif1000/pixabay-galerie" class="git"target='_blank'>Github</a>
                                <a href="https://seif1000.github.io/pixabay-galerie/"target='_blank'>project</a>
                                     
                                  
                                </div>
                                <div className="proc react-tow">
                                <a target="_blank" href="https://github.com/seif1000/React-dark-sky-clone" >Github</a>
                                    < a target="_blank" href="https://seif1000.github.io/React-dark-sky-clone/">project</a>
                                </div>
                                <div className="proc react-three">
                                <a  target="_blank" href="https://github.com/seif1000/firebase-react-blog">Github</a>
                                <a href="https://blog-seif.firebaseapp.com/" target='_blank'>
                                  project</a>
                                </div>
                                <div className="proc react-four">
                                    <a href="https://github.com/seif1000/Task-Manger-React-Hooks" class="git"target='_blank'>Github</a>
                                   <a href="https://immense-coast-59384.herokuapp.com/"target='_blank'>  peoject</a>
                                       
                                </div>
                        </div>
                       
                       
                    </div>
                    <div class="panel" id="two-panel">
                    <div className="project">
                                <div className="proc full-one">
                                     
                                     <a href="https://github.com/seif1000/nodejs-sequelize-app" class="git"target='_blank'>Github</a>
                                    <a href="https://murmuring-atoll-22449.herokuapp.com/"target='_blank'>peoject</a>
                                     
                                  
                                </div>
                                <div className="proc full-tow">
                                <a  href="https://github.com/seif1000/firebase-react-blog" class="git"target='_blank'>Github</a>
                                <a href="https://blog-seif.firebaseapp.com/" target='_blank'>peoject</a>
                                </div>
                                <div className="proc full-three">
                                   <a href="https://github.com/seif1000/Task-Manger-React-Hooks" class="git"target='_blank'>Github</a>
                                   <a href="https://immense-coast-59384.herokuapp.com/"target='_blank'>  peoject</a>
                                </div>
                               
                        </div>
                    </div>
                    <div class="panel" id="three-panel">
                    <div className="project">
                                <div className="proc app-one">
                                     
                                <a href="https://github.com/seif1000/adkari" class="git"target='_blank'>Github</a>
                                <a href="https://drive.google.com/drive/folders/1MhKbFp1fta1iimPxnWsS8mzVWVID7yAp?usp=sharing" target='_blank'>peoject</a>
                                     
                                  
                                </div>
                                
                               
                        </div>
                    </div>
                </div>
        </div>
           
               
    </div>
    )
}
