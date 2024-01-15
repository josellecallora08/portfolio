import React, { useEffect, useState } from 'react'

import location_dark from '../assets/images/location-dark-icon.svg'
import gmail from '../assets/images/gmail-icon.svg'
import work from '../assets/images/work-icon.svg'
import project from '../assets/images/portfolio2-icon.svg'
import award from '../assets/images/award-icon.svg'
import education from '../assets/images/education-icon.svg'
import about from '../assets/images/about-icon.svg'

import d_work from '../assets/images/work-dark-icon.svg'
import d_project from '../assets/images/portfolio2-dark-icon.svg'
import d_award from '../assets/images/award-dark-icon.svg'
import d_education from '../assets/images/education-dark-icon.svg'
import d_about from '../assets/images/about-dark-icon.svg'


import Education from '../component/Education'
import ThemeMode from '../component/ThemeMode'
import { useSelector } from 'react-redux'

const Home = () => {
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
            [name]: !modal.name
        }))
    }

    const is_theme_dark = useSelector((state) => state.theme === 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', is_theme_dark);
        console.log(is_theme_dark)
    }, [is_theme_dark])

  return (
    <div className={`w-screen h-screen flex items-center bg-gray-600/30 background`}>
        <div className={`relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-4/5 md:h-4/5 border m-auto rounded-md bg-slate-300 md:bg-white dark:bg-black shadow-xl open-card`} >
            <div className='w-4/5 h-4/5 md:w-full md:h-3/6 flex flex-wrap items-center justify-center  m-auto text-center  bounce'>
                <article className='mt-8'>
                    <h1 className='text-2xl md:text-5xl uppercase tracking-wider font-semibold font-mono dark:text-slate-300 cursor-default show'>Joselle E. Callora</h1>
                    <p className='text-sm text-justify md:text-center md:w-4/5 m-auto md:text-base dark:text-slate-300 md:px-10 py-5 tracking-wider capitalize font-mono up cursor-default'>A dedicated website developer with expertise in MongoDB, ExpressJs, NodeJs, React, HTML, CSS, PHP - Procedural, MySQL, and JavaScript. I excel in delivering high-quality projects on time, creating visually appealing websites, and developing dynamic web applications. With strong problem-solving and communication skills, I thrive in challenging projects, committed to exceptional results and project success.
                    </p>
                </article>
            </div>
            <div className='w-4/5 h-4/5 md:h-3/6 md:w-full md:flex m-auto'>
                <div className='w-full h-3/6 md:h-full left-transition md:bg-green-800/20 dark:text-slate-300'>
                   <div className='w-full md:w-4/5 h-4/5 flex items-center py-5 m-auto font-mono xl:text-xl'>
                        <ul className='flex items-center gap-2 flex-wrap cursor-default'>
                            <li className='h-full flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => handleModal("work")}>
                                <img src={is_theme_dark ? d_work : work} width='20px' height='20px' alt="" className=''/>
                                <span>Work</span>
                            </li>
                            <li className='flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => handleModal("project")}>
                                <img src={is_theme_dark ? d_project : project} width='20px' height='20px' alt="" className='' />
                                <span>Project</span>
                            </li>
                            <li className='flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => handleModal("education")}>
                                <img src={is_theme_dark ? d_education : education} width='20px' height='20px' alt="" className=''/>
                                <span>Education</span>
                            </li>
                            <li className='flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => handleModal("awards")}>
                                <img src={is_theme_dark ? d_award : award} width='20px' height='20px' alt="" className=''/>
                                <span>Awards</span>
                            </li>
                            <li className='flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => handleModal("about")}>
                                <img src={is_theme_dark ? d_about : about} width='20px' height='20px' alt="" className=''/>
                                <span>About</span>
                            </li>
                        </ul>
                   </div>
                </div>
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
                            <a href="mailto: josellecallora08@gmail.com" className='flex items-center gap-3 cursor-pointer md:hover:underline'><span><img src={gmail} className='w-5 h-5 xl:w-8 xl:h-8' alt="" /></span> josellecallora08@gmail.com</a>

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