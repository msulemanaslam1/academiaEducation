import React from 'react'
import './App.css'
import Header from './components/Header'
import LearnAnything from './components/LearnAnything'
import Facts from './components/Facts'
import PopularCourses from './components/PopularCourses'
import Courses from './components/Courses'
import Testimonial from './components/Testimonial'
import Blogs from './components/Blogs'
import Pricing from './components/Pricing'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <LearnAnything />
      <Facts />
      <PopularCourses/>
      <Courses/>
      <Testimonial />
      <Blogs />
      <Pricing/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App