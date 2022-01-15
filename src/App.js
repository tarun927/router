import React from "react";
import "./style.css";
import ReactDom from "react-dom"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Contactus from "./components/Contactus"
import Aboutus from "./components/Aboutus"
import Home from "./components/Home"

export default function App() {
  return (
     <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/about" element = {<Aboutus/>}/>
          <Route path="/contact" element = {<Contactus/>}/>     
          
       </Routes>
     </BrowserRouter>



  
  );
}



{/* <div>
<Home/>
<Aboutus/>
<Contactus/>


</div> */}