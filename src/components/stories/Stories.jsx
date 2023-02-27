import React from 'react'
import "./Sttories.css"
import avatar from '../../assets/img6.jpg'
import bg from '../../assets/img7.jpg'
function Stories() {
   return (
      <div className='stories'>
         <div className="container">
            <div className="head">
               <div className="text">
                  <h1>Our Stories & Lastest News</h1>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore eaque ut quos animi explicabo reprehenderit nam veritatis voluptates est pariatur laudantium iste, perspiciatis molestiae. Officiis quam possimus similique autem voluptate.</p>
               </div>
               <div className='more'>
                  <a href="#">Read More Stories</a>
               </div>
            </div>
           <div className='content'>
           <div className="stories-content">
               <h3>Design</h3>
               <p>Everything is metter of logic and power between the human</p>
               <p>An enim nullam tempor sapien gravide don porta and blandit justo integer</p>
               <div className="user-info">
                  <div className="icon">
                     <img id='avatar' src={avatar}></img>
                  </div>
                  <div id='details'>
                     <p>Williamson Briden</p>
                     <span>November 20,2019</span>
                  </div>
               </div>
            </div>

            <div className="stories-content">
               <h3>E-COMMERCE</h3>
               <p>Everything is metter of logic and power between the human</p>
               <p>An enim nullam tempor sapien gravide don porta and blandit justo integer</p>
               <div className="user-info">
                  <div className="icon">
                     <img id='avatar' src={avatar}></img>
                   </div>
                  <div id='details'>
                     <p>Williamson Briden</p>
                     <span>November 20,2019</span>
                  </div>
               </div>
            </div>

            <div className="stories-content">
               <h3>MANAGMENT</h3>
               <p>Everything is metter of logic and power between the human</p>
               <p>An enim nullam tempor sapien gravide don porta and blandit justo integer</p>
               <div className="user-info">
                  <div className="icon">
                     <img id='avatar' src={avatar}></img>
                  </div>
                  <div id='details'>
                     <p>Williamson Briden</p>
                     <span>November 20,2019</span>
                  </div>
               </div>
            </div>
           </div>
         </div>

         <div className='Event' style={{
            backgroundImage:`url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
         }}>
            <div className='background'>
               {/* <img src={bg}></img> */}
            </div>
            <div className='content'>
               <h3>It's Time to Start Investing in Yourself in Learning</h3>
               <div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ullam laboriosam unde fuga, quod est nisi accusamus provident</p>
                  <a href='#'>
                     <span>Get Start →</span>
                  </a>
               </div>
            </div>
         </div>

      </div>
   )
}

export default Stories