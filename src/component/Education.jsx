import React from 'react'
import ThemeMode from './ThemeMode'
import PreviousButton from './PreviousButton'
const Education = ({is_theme_dark, handlePrevious, modal}) => {
  return (
    <div className='fixed flex justify-center items-center w-full h-full z-10'>
      <div className={`relative w-0 h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-0 md:h-4/5 border m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black shadow-xl open-card ${modal.education ? 'w-screen z-10' : 'z-0'}`} >
       as 
        <div className='absolute top-0 left-0 flex items-center justify-center w-20 h-20' >
            <PreviousButton
            handlePrevious={handlePrevious}
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