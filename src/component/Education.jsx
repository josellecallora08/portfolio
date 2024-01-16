import React, { useState } from 'react'
import education from '/education-icon.svg'
import d_education from '/education-dark-icon.svg'


import apec from '/apec-icon.svg'
import sjcdc from '/sjcdc-icon.svg'
import tup from '/tup.svg'
import ThemeMode from './ThemeMode'
import CloseButton from './CloseButton'
const Education = ({educationModal, setEducationModal, is_theme_dark}) => {

  const [closeModal, setCloseModal] = useState(false)
  return (
    <div className={`fixed flex justify-center items-center w-full h-full z-10 md:opacity-0 ${educationModal ? 'md:opacity-100 duration-500' : '' }`}>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-slate-200 dark:bg-black duration-500 shadow-xl `} >
        <h2 className='relative flex gap-2 text-2xl w-fit h-fit p-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce '>
          <img src={is_theme_dark ? d_education : education} alt="" className='w-8 h-8 md:w-16 md:h-10'/>Education
        </h2>
       <div className='flex flex-col md:flex-row md:flex-wrap gap-5 w-4/5 m-auto md:h-4/5 md:overflow-auto scroll-overflow' >
        <div className='flex flex-col items-center gap-5 font-mono  font-semi-bold '>
          <div className='w-full h-full rounded-md overflow-hidden'>
            <img src={apec} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <article className='flex flex-col w-full dark:text-slate-300'>
            <h1 className='text-2xl xl:text-4xl tracking-wider uppercase'>APEC Schools</h1>
            <h3>Junior High School  (July 2015 - May 2018)</h3>
            <p>Bacoor city, Cavite</p>
          </article>
        </div>
        <div className='flex flex-col items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden'>
            <img src={sjcdc} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <article className='w-full dark:text-slate-300'>
            <h1 className='text-2xl xl:text-4xl tracking-wider uppercase'>St. Jude College of Dasmariñas city Cavite</h1>
            <p>Senior High School (June 2018 - April 2020)</p>
            <p>Dasmarinas city, Cavite</p>
          </article>
        </div>
        <div className='flex flex-col items-center gap-5 font-mono font-semi-bold '>
          <div className='w-full h-full border-none rounded-md overflow-hidden'>
            <img src={tup} className="w-full h-full shadow-md rounded-md" alt="" />
          </div>
          <article className='w-full dark:text-slate-300'>
            <h1 className='text-2xl xl:text-4xl tracking-wider uppercase'>Technological University of the Philippines</h1>
            <p>Bachelor of Science in Information Systems (Septerm 2020 - Current)</p>
            <p>Dasmarinas city, Cavite</p>
          </article>
        </div>
       </div>
        <CloseButton
        setCloseModal = {setEducationModal}
        is_theme_dark={is_theme_dark}/>
      </div>
 
    </div>
  )
}

export default Education