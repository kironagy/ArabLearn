import React from 'react'
import "./HomeContent.css"
import bg from "../../assets/images/background.jpg"
function HomeContent() {
   return (
      <div className='home' style={{ 
            background: `url(${bg}) ` ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
         }}>
         <div className="container" > 
            <h1 className='z1'>Get Skills From</h1>
            <h1 className='z1'> OurTop Class Courses</h1>
            <p className='z1'>Online learning programming designed to prepare you for a career.</p>
            <p className='z1'>Courses include recorded video lectures, auto-graded</p>
            <div className="search z1">
               <input type="text" placeholder='Search your favorite courses' />
               <button>Search</button>
            </div>
         </div>
      </div>
   )
}

export default HomeContent