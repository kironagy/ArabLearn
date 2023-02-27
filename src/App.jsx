import React from 'react'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Stories from './components/stories/Stories'
import Home from './pages/Home'
import Course from './components/course/Course'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Course></Course>
      <Stories />
      <Footer />
    </>
  )
}

export default App
