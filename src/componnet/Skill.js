import React from 'react' ;
import front from  "../asset/code.png"; 
import back from "../asset/back.png" ;
import android from "../asset/android.png" ;

export default function Skill() {
    return (
        <div className="Skills">
            <p>Skills</p>
            <div className="stacks">
                <div className="stack">
                     <img src={front}alt=""/>
                     <p>Front-End</p>
                     <div className="chips">
                         <p>Html</p>
                         <p>CSS</p>
                         <p>Javascript</p>
                         <p>React</p>
                         <p>Sass</p>
                         <p>Webpack</p>
                         <p>Git</p>
                         <p>Github</p>
                      
                    </div>
                </div>
                <div className="stack">
                   <img src={back} alt=""/>  
                    <p>Back-End</p>
                    <div className="chips">
                         <p>Nodejs</p>
                         <p>Express.js</p>
                         <p>MongoDB</p>
                         <p>SQL</p>
                         <p>MySql</p>
                         <p>Firebase</p>
                        
                      
                    </div>
                </div>
                <div className="stack">
                    <img src={android}alt=""/>    
                    <p>Android</p>
                    <div className="chips">
                         <p>Android Studio</p>
                         <p>Java</p>
                         <p>XML</p>
                         <p>SQlit</p>
                         <p>Firebase</p>
                        
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
