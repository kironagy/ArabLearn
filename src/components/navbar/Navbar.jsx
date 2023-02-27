import React, { useState } from 'react'
import "./Navbar.css"
import { FaBook } from 'react-icons/fa';
import { HiBars3BottomRight } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
   const [ showMobile, setShowMobile] = useState(false)
   return (
         <div className='navbar'>
            <div className="container">
               <div className="logo">
                  <FaBook /> 
                  <span>Arab Learn</span>
               </div>
               <div className={showMobile? "mob active" : "mob"}>
               <span className="close">
                  <AiOutlineClose onClick={ _=> setShowMobile(false) } />
               </span>
                  <div className="links">
                     <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Courses</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contect</a></li>
                        <li><a href="#">Blog</a></li>
                     </ul>
                  </div>
                  <div className="reg">
                     <a href="#">Register</a>
                  </div>
               </div>
               <span className='bars' onClick={ _=> setShowMobile(true) }>
                  <HiBars3BottomRight />
               </span>
            </div>
         </div>
   )
}

export default Navbar