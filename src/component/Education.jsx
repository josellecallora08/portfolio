import React, { useState } from 'react'
import education from '/education-icon.svg'
import d_education from '/education-dark-icon.svg'

import apec from '/apec-icon.svg'
import sjcdc from '/sjcdc-icon.svg'
import tup from '/tup.svg'
import CloseButton from './CloseButton'
const Education = ({educationModal, setEducationModal, is_theme_dark}) => {

  return (
    <div className={`absolute flex justify-center items-center w-full h-full duration-500`}>
      <div className={`relative w-full h-auto md:w-3/5 md:h-auto m-auto rounded-md bg-slate-300 md:bg-slate-200 dark:bg-black duration-500 shadow-xl `} >
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-8 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce '>
          <img src={is_theme_dark ? d_education : education} alt="" className='w-8 h-8 md:w-16 md:h-10'/>Education
        </h2>
       <div className='flex flex-col md:flex-row md:flex-wrap gap-10 w-4/5 m-auto md:h-4/5 '>
       <figure className='flex flex-col items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden left-transition'>
            <img src={tup} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://www.tup.edu.ph" target='_blank' className='text-md font-bold xl:text-4xl tracking-wider uppercase cursor-pointer hover:underline'>Technological University of the Philippines</a>
            <p className='text-sm md:text-base'>Bachelor of Science in Information Systems (September 2020 - Current)</p>
            <p className='text-sm md:text-base'>Manila</p>
          </figcaption>
        </figure>
        <figure className='flex flex-col items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden right-transition'>
            <img src={sjcdc} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://www.stjude.edu.ph" target='_blank' className='text-md font-bold xl:text-4xl tracking-wider uppercase hover:underline'>St. Jude College of Dasmariñas city Cavite</a>
            <p  className='text-sm md:text-base'>Senior High School (June 2018 - April 2020)</p>
            <p className='text-sm md:text-base'>Dasmarinas city, Cavite</p>
          </figcaption>
        </figure>
        <figure className='flex flex-col w-full items-center gap-5 font-mono  font-semi-bold mb-10'>
          <div className='w-full h-full  border-none rounded-md overflow-hidden left-transition'>
            <img src={apec} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <figcaption className='w-full dark:text-slate-300'>
            <a href="https://apecschools.edu.ph" target='_blank' className='text-md font-bold xl:text-4xl tracking-widest uppercase hover:underline' >APEC Schools</a>
            <p className='text-sm md:text-base'>Junior High School  (July 2015 - May 2018)</p>
            <p className='text-sm md:text-base'>Bacoor city, Cavite</p>
          </figcaption>
        </figure>
       </div>
        <CloseButton
        setCloseModal = {setEducationModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </div>
  )
}

export default Education