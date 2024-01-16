import React from 'react'
import CloseButton from './CloseButton'
import ThemeMode from './ThemeMode'
import award from '/award-icon.svg'
import d_award from '/award-dark-icon.svg'

const Awards = ({awardsModal, setAwardsModal, is_theme_dark}) => {
  return (
    <section className={`absolute ${awardsModal ? 'flex' : 'flex close'} justify-center items-center w-full h-full z-10`}>
      <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-3/5 md:h-4/5 m-auto rounded-md bg-slate-300 md:bg-slate-200 dark:bg-black duration-500 shadow-xl `} >
        <h2 className='flex justify-start gap-2 text-2xl w-4/5 mx-auto h-fit py-10 md:text-4xl uppercase font-semibold font-mono group cursor-default tracking-widest dark:text-slate-300 bounce'>
          <img src={is_theme_dark ? d_award : award} className='w-8 h-8 md:w-16 md:h-10' alt="" /> Awards
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
        setCloseModal = {setAwardsModal}
        is_theme_dark={is_theme_dark}/>
      </div>
    </section>
  )
}

export default Awards