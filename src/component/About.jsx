import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import about from '/about-icon.svg'
import d_about from '/about-dark-icon.svg'
const About = ({aboutModal, setAboutModal,is_theme_dark}) => {
  return (
    <section className={`fixed ${aboutModal ? 'flex' : 'close hidden'} justify-center items-center w-full h-full z-10`}>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-sale-200 dark:bg-black duration-500 shadow-xl `} >
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
        <img src={is_theme_dark ? d_about : about} alt="" className='w-8 h-8 md:w-16 md:h-10'/>About
        </h2>
        <CloseButton
        setCloseModal = {setAboutModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default About