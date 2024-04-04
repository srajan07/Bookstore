import React from 'react'
import Navbar from '../comp/Navbar'
import Course from '../comp/Course'
import Footer from '../comp/footer'

function Courses() {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <Course/>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Courses
