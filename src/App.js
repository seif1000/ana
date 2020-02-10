import React ,{useEffect} from 'react';
import './App.scss';
import ShowCase from './componnet/ShowCase';
import Skill from './componnet/Skill';
import Project from './componnet/Project';
import Footer from './componnet/Footer';
import {  Element , animateScroll as scroll } from 'react-scroll'
import {initializeApp} from "firebase" ;
function App() {
  const config = {
    apiKey: "AIzaSyAdbxi8lgWr_d6V9oQY-zbEyNJFn497XUw",
    authDomain: "portfolio-3163a.firebaseapp.com",
    databaseURL: "https://portfolio-3163a.firebaseio.com",
    projectId: "portfolio-3163a",
    storageBucket: "portfolio-3163a.appspot.com",
    messagingSenderId: "104630881178"
  };
   useEffect(()=>{
        initializeApp(config) ;
   },[])
 
  return (
   
      <div className="App">
          <ShowCase/>
           
                <Element name="Skills">
                   <Skill/>
                </Element>
               
                   <Element name="Projects">
                      <Project/>
                   </Element>
                 <Element name="Footer">
                    <Footer/>     
                 </Element>
                
           
                 
        </div>
       
   
   
  );
}

export default App;
