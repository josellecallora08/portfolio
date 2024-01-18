import React, { useState } from 'react'
import education from '/education-icon.svg'
import d_education from '/education-dark-icon.svg'

import apec from '/apec-icon.svg'
import sjcdc from '/sjcdc-icon.svg'
import tup from '/tup.svg'
import CloseButton from './CloseButton'
const Education = ({educationModal, setEducationModal, is_theme_dark}) => {

  return (
    <section id="education" className={`w-full h-full ${educationModal ? 'open' : 'fade-out hidden'} justify-center items-center`}>
      <div className={`relative w-full h-auto md:w-3/5 m-auto bg-slate-200/50 rounded-md md:bg-slate-200/70 dark:bg-black/50 shadow-xl overflow-hidden`}>
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-8 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce '>
          <img src={is_theme_dark ? d_education : education} alt="" className='w-8 h-8 md:w-16 md:h-10'/>Education
        </h2>
       <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-4/5 m-auto md:h-4/5 '>
       <figure className='flex flex-col w-full items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden left-transition'>
            <img src={tup} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://www.tup.edu.ph" target='_blank' className='text-md font-bold xl:text-3xl tracking-wider uppercase cursor-pointer '>Technological University of the Philippines</a>
            <p className='text-sm md:text-base open'>Bachelor of Science in Information Systems (September 2020 - Current)</p>
            <p className='text-sm md:text-base open'>Manila</p>
            <p className='text-xs md:text-base lg:text-md mt-5 open'>
            During my College, I pursued a Bachelor of Science in Information Systems, consistently earning a spot on the Dean's List. The program covered a spectrum of subjects, from Web Development and Programming to Statistics and Entrepreneurship.Courses in Web Development provided a comprehensive understanding of creating dynamic and interactive websites, utilizing languages such as HTML, CSS, and JavaScript, along with exploring frameworks for advanced development. These skills not only broadened my technical expertise but also laid the groundwork for a user-centric approach in the design of modern information systems.</p>
          </figcaption>
        </figure>
        <figure className='flex flex-col w-full items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden right-transition'>
            <img src={sjcdc} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://www.stjude.edu.ph" target='_blank' className='text-md font-bold xl:text-3xl tracking-wider uppercase '>St. Jude College of Dasmariñas Cavite</a>
            <p  className='text-sm md:text-base open'>Senior High School (June 2018 - April 2020)</p>
            <p className='text-sm md:text-base open'>Dasmariñas city, Cavite</p>
            <p className='text-xs md:text-base lg:text-md mt-5 open'>
            During my Senior High School, I specialized in the Science, Technology, Engineering, and Mathematics strand, where I delved into various scientific and mathematical principles, enhancing my analytical and problem-solving skills. The curriculum included in-depth studies in subjects like Physics, Chemistry, Biology,Technology, and Mathematics.</p>
          </figcaption>
        </figure>
        <figure className='flex flex-col w-full items-center gap-5 font-mono  font-semi-bold mb-10'>
          <div className='w-full h-full border-none rounded-md overflow-hidden left-transition'>
            <img src={apec} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://apecschools.edu.ph" target='_blank' className='text-md font-bold xl:text-3xl tracking-wider uppercase ' >APEC Schools</a>
            <p className='text-sm md:text-base open'>Junior High School  (July 2015 - May 2018)</p>
            <p className='text-sm md:text-base open'>Bacoor city, Cavite</p>
            <p className='text-xs md:text-base lg:text-md mt-5 open'>
            During my Junior High School at Affordable Private Education Center Schools, I found myself immersed in a different educational environment. Life Labs has exposed me to real-world problems, fostering a paradigm shift in my approach to learning.  This experience has not only shaped my academic journey but has also instilled in me a resilience and passion for learning.</p>
          </figcaption>
        </figure>
       </div>
        <CloseButton
        setCloseModal = {setEducationModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default Education