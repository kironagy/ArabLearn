import React from 'react'
import { MdOutlineComputer } from "react-icons/md"
import "./Category.css"
function Category() {
   return (
      <div className='container'>
         <div className="category">
            <div className="head">
               <h3>Popular Subjects</h3>
               <button>View All Category</button>
            </div>
            <div className="category-boxs">
               <div className="box">
                  <span className="icon"><MdOutlineComputer /></span>
                  <p>Computer Sciencs</p>
               </div>
               <div className="box">
                  <span className="icon"><MdOutlineComputer /></span>
                  <p>Computer Sciencs</p>
               </div>
               <div className="box">
                  <span className="icon"><MdOutlineComputer /></span>
                  <p>Computer Sciencs</p>
               </div>
               <div className="box">
                  <span className="icon"><MdOutlineComputer /></span>
                  <p>Computer Sciencs</p>
               </div>
               <div className="box">
                  <span className="icon"><MdOutlineComputer /></span>
                  <p>Computer Sciencs</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Category