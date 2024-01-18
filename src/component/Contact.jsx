import React from 'react'
import location_dark from '/location-dark-icon.svg'
import gmail from '/gmail-icon.svg'
import github from '/github-icon.svg'
import linkedin from '/linked-in-icon.svg'
import facebook from '/facebook-icon.svg'


import d_linkedin from '/linked-in-dark-icon.svg'
import d_github from '/github-dark-icon.svg'
const Contact = ({is_theme_dark}) => {
  return (
    <article className='w-full md:w-4/5 h-4/5 m-auto'>
        <h2 className='relative w-fit md:text-3xl uppercase font-semibold font-mono group cursor-default dark:text-slate-300'>Interact With Me 
            <span className='absolute left-0 bottom-0 border-b-2 w-full md:w-0 border-black dark:border-white md:group-hover:w-full duration-500'></span>
        </h2>
        <div className='flex flex-row flex-wrap gap-2 mt-5 font-mono xl:text-lg dark:text-slate-300 cursor-default'>
            <a href="mailto: josellecallora08@gmail.com" className='flex items-center gap-3 cursor-pointer md:hover:underline'>
                <span>
                    <img src={gmail} className='w-5 h-5 xl:w-8 xl:h-8' alt="" />
                </span> josellecallora08@gmail.com
            </a>
            <p className='w-full flex items-center gap-3'>
                <span>
                    <img src={location_dark} className='w-5 h-5 xl:w-8 xl:h-8' alt="" />
                </span> 
                Dasmariñas city, Cavite
            </p>
            <div className='md:absolute flex gap-2 cursor-default bottom-10 right-10'>
                <a href="https://www.facebook.com/josellecallora08" target="_blank">
                    <img src={facebook} className='w-8 h-8 xl:w-12 xl:h-12 md:hover:-translate-y-2 duration-100' alt="" />
                </a>
                <a href="https://github.com/josellecallora08" target="_blank">
                    <img src={is_theme_dark ? d_github : github} className='w-8 h-8 xl:w-12 xl:h-12 md:hover:-translate-y-2 duration-100' alt="" />
                </a>
                <a href="https://www.linkedin.com/in/josellecallora08/" target="_blank">
                    <img src={is_theme_dark ? d_linkedin : linkedin} className='w-8 h-8 xl:w-12 xl:h-12 md:hover:-translate-y-2 duration-100' alt="" />
                </a>
            </div>
        </div>
    </article>
  )
}

export default Contact