import React, { useState } from "react";
import google from "./google.svg";
import facebook from "./facebook.svg";
import graphics from "./graphics.svg";
import './App.css';


// import Counter from './Counter';
import ImagesList from "./components/ImagesList";
import SearchBar from "./components/SearchBar";


const App = ()=>{
  // const[info,setInfo] = useState("")
  // console.log(info);
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[conformpassword,setConformPassword] = useState("");
  const[error,setError] = useState([]);
  const[successMessage,setSuccessMessage] = useState("");
  
  function validateForm(e){
    e.preventDefault();
    setEmail([]);
    setSuccessMessage("");
    const newError = [];
    if(!email){
      newError.push("this is not email");
    }
    if(!name){
      newError.push("this is not name");
    }
    if(!password){
      newError.push("password should contain the 8 chars ");
    }
    if(password !== conformpassword){
      newError.push("both conform and password are not same...!");
    }
    if(newError.length > 0){
      setError(newError);
      console.log(newError);
    }else{
      setError([]);
      setSuccessMessage("user registered successfully");
      console.log("user registered successfully");
    }
  }
  

  return(
    <div className="app">
      {/* <Counter/> */}
      {/* <SearchBar setInfo={setInfo}/> */}
      {/* <ImagesList images={info}/> */}
      <div className="left-div">
        <p id="half-left-text">Find 3D Objects, Mockups and Ilustration here</p>
        <img className="graphics" src={graphics} alt="graphics"/>
      </div>
      <div className="form-div">
        <div className="row-1">
          <h1 className="heading-1">Create Account</h1>
          <div className="signup-div">
            <img src={google} className="google" alt="google"/>
            Signup with Google
          </div>
          <div className="signup-div">
            <img src={facebook} className="facebook" alt="facebook"/>
            Signup with Facebook
          </div>
        </div>
        <p className="or">-OR-</p>
        <form className="form" onSubmit={validateForm}>
          <input type="text" placeholder="FullName" 
          onChange={(e)=>setName(e.target.value)} value={name}/>
          <input type="email" placeholder="Email" 
          onChange={(e)=>setEmail(e.target.value)} value={email}/>
          <input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <input type="password" placeholder="ConformPassword" 
          onChange={(e)=>setConformPassword(e.target.value)} value={conformpassword}/>
          <button className="submit">Create Account</button>
        </form>
        {error.length > 0 ? (
          <div>
            <ul>
              {error.map((item,index)=>(
                <li className="red">{item}</li>
              ))}
            </ul>
            </div>
        ): null
        }
        <p className="green">{successMessage}</p>
      </div>
     
    </div>
  )
}

export default App;
