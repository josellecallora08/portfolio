import React from 'react'
import ThemeMode from './ThemeMode'
import PreviousButton from './PreviousButton'
const Education = ({is_theme_dark, modal}) => {
  return (
    <div className='fixed flex justify-center items-center w-full h-full z-10'>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-0 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black duration-500 shadow-xl open-card ${modal ? 'w-4/5' : '' }`} >
       as 
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