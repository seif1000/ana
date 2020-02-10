import React,{useState} from 'react' ;
import {database } from "firebase" ;



export default function Footer() {
   const  initialState = {
        email:"",
        phone:"",
        tex:"",
        show:false
    }
    const [message,setMessage]  = useState(initialState) ;
   const onChangeHandler = (e)=>{
       const {name,value} = e.target ;
       setMessage((message)=>(
           {
               ...message,
               [name]:value
           }
       ))
   }
  

;
   
   const submitHandler = (e)=>{
        
          e.preventDefault() ;
          database().ref('messages').push()
          .set({
              email:message.email,
              phone:message.phone,
              text:message.tex
          })
          setMessage(message=>({
              ...message,
              email:"",
              phone:"",
              tex:"",
              show:true
            
          }))
          setTimeout(() => {
            setMessage(message=>({
              
                show:false
              
            }))
          }, 3000);
   }
 
    return (
        <footer id="footer">
           <div className="one"> 

           </div>
           < div className="Contact">
               <form onSubmit={submitHandler}>
                   <p>let's get in contact </p>
                   <p className="sucsess" style={{opacity:message.show?1:0}}>message sent,Thanks!</p>
                   <div>
                       <label>Email</label>
                       <input type="email" name="email" value={message.email} onChange={onChangeHandler}/>
                   </div>
                   <div>
                       <label>Phone Number</label>
                       <input type="text" name="phone" value={message.phone} onChange={onChangeHandler}/>
                   </div>
                   <div>
                       <label>Message</label>
                       <textarea  style={{height:"100px"}} name="tex" value={message.tex} onChange={onChangeHandler}/>
                   </div>
                   <button type> submit </button>
               </form>
              
               <div className="media">
                  <p>Find Me</p>
                  <a target="_blank" href="https://www.linkedin.com/in/benmazouz-seif-eddine-721112141/"><i class="fab fa-linkedin-in"></i> </a>   
                <a href="https://github.com/seif1000" target="_blank"> <i class="fab fa-github"></i></a> 
                <a href="https://web.facebook.com/profile.php?id=100004879302174&ref=bookmarks" target='_blank'>  <i class="fab fa-facebook-f"></i></a>
                  <p className="email">Email <p>seifwin74@gmail.com</p></p>

                  
               </div>
           </div>
          
        </footer>
    )
}
