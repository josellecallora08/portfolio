import React, { useEffect, useState } from 'react'
import location_dark from '/location-dark-icon.svg'
import gmail from '/gmail-icon.svg'
import github from '/github-icon.svg'
import linkedin from '/linked-in-icon.svg'
import facebook from '/facebook-icon.svg'


import d_linkedin from '/linked-in-dark-icon.svg'
import d_github from '/github-dark-icon.svg'

import ThemeMode from '../component/ThemeMode'
import { useSelector } from 'react-redux'
import Navigation from '../component/Navigation'
import Work from '../component/Work'
import Education from '../component/Education'
import Project from '../component/Project'
import Awards from '../component/Awards'
import About from '../component/About'


const Home = () => {
    const is_theme_dark = useSelector((state) => state.theme === 'dark');
    const [modal, setModal] = useState({
        work: false,
        project: false,
        education: false,
        awards:false,
        about:false
    })
    
    const handleModal = (name) => {
        setModal((component) => ({
            ...component,
            [name]: true
        }))
        console.log(modal.education)
    }
   
    useEffect(() => {
        document.documentElement.classList.toggle('dark', is_theme_dark);
        console.log(is_theme_dark)
    }, [is_theme_dark])

  return (
    <div className={`w-screen h-screen flex items-center bg-gray-600/30 background`}>
        {modal.work ?
        <Work
        is_theme_dark = {is_theme_dark}
        /> : modal.project ? 
        <Project 
        is_theme_dark = {is_theme_dark}
        /> : modal.education ? 
        <Education
        is_theme_dark = {is_theme_dark}
        /> : modal.awards ? 
        <Awards 
        is_theme_dark = {is_theme_dark}
        /> : modal.about ? 
        <About 
        is_theme_dark = {is_theme_dark}
        /> : ''}
        <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-4/5 md:h-4/5 border m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black shadow-xl open-card`} >
            <div className={`w-4/5 h-4/5 md:w-full md:h-3/6 flex flex-wrap items-center justify-center  m-auto text-center  bounce`}>
                <article className='mt-8'>
                    <h1 className='text-3xl md:text-5xl uppercase tracking-wider font-black font-mono dark:text-slate-300 cursor-default show'>Joselle E. Callora</h1>
                    <p className='text-sm text-center md:text-center md:w-4/5 m-auto md:text-base dark:text-slate-300 md:px-10 py-5 tracking-wider capitalize font-mono up cursor-default' >
                        A dedicated website developer with expertise in MongoDB, ExpressJs, NodeJs, React, HTML, CSS, PHP - Procedural, MySQL, and JavaScript. With strong problem-solving and communication skills, I thrive in challenging projects, committed to exceptional results and project success.
                    </p>
                </article>
            </div>
                <div className='w-4/5 h-4/5 md:h-3/6 md:w-full md:flex m-auto'>
                    <Navigation
                    handleModal={handleModal}
                    is_theme_dark={is_theme_dark} />
                    <div className='w-full h-3/6 md:h-full flex right-transition md:bg-blue-600/20'>
                        <article className='w-full md:w-4/5 h-4/5 m-auto'>
                            <h2 className='relative w-fit md:text-3xl uppercase font-semibold font-mono group cursor-default dark:text-slate-300'>Interact With Me 
                                <span className='absolute left-0 bottom-0 border-b-2 w-full md:w-0 border-black dark:border-white md:group-hover:w-full duration-500'></span>
                            </h2>
                            <div className='flex flex-row flex-wrap gap-2 mt-5 font-mono xl:text-lg dark:text-slate-300 cursor-default'>
                            <p className='w-full flex items-center gap-3'>
                                <span>
                                    <img src={location_dark} className='w-5 h-5 xl:w-8 xl:h-8' alt="" />
                                </span> 
                                Dasmariñas city, Cavite
                            </p>
                            <a href="mailto: josellecallora08@gmail.com" className='flex items-center gap-3 cursor-pointer md:hover:underline'>
                                <span>
                                    <img src={gmail} className='w-5 h-5 xl:w-8 xl:h-8' alt="" />
                                </span> josellecallora08@gmail.com
                            </a>
                            <div className='md:absolute flex gap-2 cursor-default bottom-10 right-10'>
                                <a href="https://www.facebook.com/josellecallora08" target="_blank">
                                    <img src={facebook} className='w-8 h-8 xl:w-12 xl:h-12' alt="" />
                                </a>
                                <a href="https://github.com/josellecallora08" target="_blank">
                                    <img src={is_theme_dark ? d_github : github} className='w-8 h-8 xl:w-12 xl:h-12' alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/josellecallora08/" target="_blank">
                                    <img src={is_theme_dark ? d_linkedin : linkedin} className='w-8 h-8 xl:w-12 xl:h-12' alt="" />
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className='absolute top-0 right-0 flex items-center justify-center w-20 h-20' >
                <ThemeMode
                is_theme_dark={is_theme_dark}/>
            </div>
        </div>    
    </div>
  )
}

export default Home