import React from 'react'
import { FaBook } from 'react-icons/fa';
import "./Footer.css"
function Footer() {
   return (
      <div className='footer'>
         <div className="logo">
            <FaBook /> 
            <span>Arab Learn</span>
         </div>
         <div className="links">
            <div className="column">
               <h3>About Us</h3>
               <ul>
                  <li><a href="#">Graduation</a></li>
                  <li><a href="#">Admission</a></li>
                  <li><a href="#">Internationa</a></li>
                  <li><a href="#">FAQs</a></li>
               </ul>
            </div>
            <div className="column">
               <h3>About Us</h3>
               <ul>
                  <li><a href="#">Graduation</a></li>
                  <li><a href="#">Admission</a></li>
                  <li><a href="#">Internationa</a></li>
                  <li><a href="#">FAQs</a></li>
               </ul>
            </div>
            <div className="column">
               <h3>About Us</h3>
               <ul>
                  <li><a href="#">Graduation</a></li>
                  <li><a href="#">Admission</a></li>
                  <li><a href="#">Internationa</a></li>
                  <li><a href="#">FAQs</a></li>
               </ul>
            </div>
            <div className="column">
               <h3>About Us</h3>
               <ul>
                  <li><a href="#">Graduation</a></li>
                  <li><a href="#">Admission</a></li>
                  <li><a href="#">Internationa</a></li>
                  <li><a href="#">FAQs</a></li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Footer
