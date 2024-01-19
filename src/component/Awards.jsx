import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import award from '/award-icon.svg'
import d_award from '/award-dark-icon.svg'
import js from '/js-cert.svg'

const Awards = ({awardsModal, setAwardsModal, is_theme_dark}) => {
  return (
    <section id="awards" className={`fixed w-full h-full ${awardsModal ? 'flex open' : 'fade-out hidden'} justify-center items-center`}>
      <div className={`relative w-full h-full md:h-4/5 md:w-3/5 m-auto bg-slate-200/50 rounded-md md:bg-slate-200/70 dark:bg-black/50 shadow-xl  overflow-hidden`}>
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
        <img src={is_theme_dark ? d_award : award} alt="" className='w-8 h-8 md:w-16 md:h-10'/>award
        </h2>
        <div className='flex flex-wrap md:gap-8 w-4/5 h-auto md:h-4/5 m-auto'>
          <figure className='flex flex-wrap md:flex-nowrap md:gap-10 md:h-4/5'>
            <img src={js} className='md:w-1/2 h-fit mb-5 left-transition' alt="Javascript Essentials" />
            <figcaption className='text-xs md:text-base lg:text-md text-left md:leading-10 md:text-justify dark:text-slate-300 font-mono left-transition capitalize'>
            The course introduced me to basic JavaScript concepts such as JavaScript Array Method, Data types, Functions, Loops, Variables, Errors, Comments, and Conditional Executions. These are crucial especially right now I am honing my skills on MERN Stack which is a Pure JavaScript software development tool. 
            </figcaption>
          </figure>
         
        </div>
        <br/>
        <br/>
        <section className='flex flex-col gap-5 w-4/5 h-full md:h-auto m-auto text-xs md:text-base lg:text-md'>
          
        </section>
        <CloseButton
        setCloseModal = {setAwardsModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default Awards