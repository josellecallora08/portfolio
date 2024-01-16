import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import work from '/work-icon.svg'
import d_work from '/work-dark-icon.svg'

const Work = ({workModal, setWorkModal, is_theme_dark}) => {
  return (
    <div className={`absolute ${workModal ? 'flex' : 'hidden'} justify-center items-center w-full h-full z-10`}>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-slate-200 dark:bg-black duration-500 shadow-xl`} >
        <h2 className='flex justify-start gap-2 w-4/5 mx-auto h-fit py-10 text-2xl md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
          <img src={is_theme_dark ? d_work : work} className='w-8 h-8 md:w-16 md:h-10' alt="" /> Work
        </h2>
        <div>

        </div>
        <CloseButton
        setCloseModal = {setWorkModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </div>
  )
}

export default Work