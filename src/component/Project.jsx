import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'

const Project = () => {
  return (
    <div className='fixed flex justify-center items-center w-full h-full z-10'>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black duration-500 shadow-xl open-card ${modal ? 'w-4/5' : '' }`} >
        <h2 className='relative w-fit h-fit p-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
          Project
        </h2>
       {/* <div className='flex flex-col md:flex-row md:flex-wrap gap-5 w-4/5 m-auto h-4/5'>
        <div className='flex flex-col gap-2 font-mono  font-semi-bold '>
          <div className='w-full border-none rounded-md overflow-hidden'>
            <img src={apec} className="w-full h-52" alt="" />
          </div>
          <article className='w-full dark:text-slate-300'>
            <h1 className='text-2xl xl:text-4xl tracking-wider uppercase'>Junior High School</h1>
            <p>Bacoor city, Cavite</p>
            <p>July 2015 - May 2018</p>
          </article>
        </div>
        <div className='flex flex-col gap-2 font-mono font-semi-bold '>
          <div className='w-full border-none rounded-md overflow-hidden'>
            <img src={sjcdc} className="w-full h-52" alt="" />
          </div>
          <article className='w-full dark:text-slate-300'>
            <h1 className='text-2xl xl:text-4xl tracking-wider uppercase'>Senior High School</h1>
            <p>Dasmarinas city, Cavite</p>
            <p>June 2018 - April 2020</p>
          </article>
        </div>
       </div> */}
        <CloseButton
        setCloseModal = {setCloseModal}
        is_theme_dark={is_theme_dark}/>
      </div>
        <ThemeMode
        is_theme_dark={is_theme_dark}/>
    </div>
  )
}

export default Project