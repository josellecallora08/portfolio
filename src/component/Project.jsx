import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import project from '/portfolio2-icon.svg'
import d_project from '/portfolio2-dark-icon.svg'

const Project = ({projectModal, setProjectModal, is_theme_dark}) => {
  return (
    <section id="project" className={`absolute ${projectModal ? 'open' : 'hidden fade-out'} justify-center items-center w-full h-full`}>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-slate-200 dark:bg-black duration-500 shadow-xl`} >
        <h2 className='relative flex gap-2 text-2xl w-4/5 mx-auto h-fit py-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
        <img src={is_theme_dark ? d_project : project} className='w-8 h-8 md:w-16 md:h-10' alt="" /> Project
        </h2>
        <CloseButton
        setCloseModal = {setProjectModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default Project