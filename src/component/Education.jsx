import React from 'react'
import apec from '/apec-icon.svg'
import ThemeMode from './ThemeMode'
import PreviousButton from './PreviousButton'
const Education = ({is_theme_dark, modal}) => {
  return (
    <div className='fixed flex justify-center items-center w-full h-full z-10'>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-4/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black duration-500 shadow-xl open-card ${modal ? 'w-4/5' : '' }`} >
       <div className='border-2 w-4/5 m-auto h-4/5'>
        <div className='flex gap-2 font-mono uppercase font-semi-bold '>
          <div className='border-none rounded-md overflow-hidden'>
            <img src={apec} className="w-80" alt="" />
          </div>
          <div>
            <article>
              <h1 className='text-2xl'>Junior High School</h1>
              <p>Bacoor, Cavite</p>
              <p>July 2015 - May 2018</p>
            </article>
          </div>
        </div>
        <div>
          2
        </div>
       </div>
        <div className='absolute top-0 left-0 flex items-center justify-center w-20 h-20' >
            <PreviousButton
            modal={modal}
            is_theme_dark = {is_theme_dark}
            />
        </div>
        <div className='absolute top-0 right-0 flex items-center justify-center w-20 h-20' >
            <ThemeMode
            is_theme_dark={is_theme_dark}/>
        </div>
      </div>
    </div>
  )
}

export default Education