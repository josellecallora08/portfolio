import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'

const Work = () => {
  return (
    <div className='fixed flex justify-center items-center w-full h-full z-10'>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black duration-500 shadow-xl open-card ${modal ? 'w-4/5' : '' }`} >
        <h2 className='relative w-fit h-fit p-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
          Work
        </h2>
        <div>
          No Experience Yet.
        </div>
        <CloseButton
        setCloseModal = {setCloseModal}
        is_theme_dark={is_theme_dark}/>
      </div>
        <ThemeMode
        is_theme_dark={is_theme_dark}/>
    </div>
  )
}

export default Work