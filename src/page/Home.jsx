import React, { useEffect, useState } from 'react'


import ThemeMode from '../component/ThemeMode'
import { useSelector } from 'react-redux'
import Navigation from '../component/Navigation'
import Work from '../component/Work'
import Education from '../component/Education'
import Project from '../component/Project'
import Awards from '../component/Awards'
import About from '../component/About'
import Contact from '../component/Contact'


const Home = () => {
    const is_theme_dark = useSelector((state) => state.theme === 'dark');
    const [educationModal, setEducationModal] = useState(false)
   
    useEffect(() => {
        document.documentElement.classList.toggle('dark', is_theme_dark);
        console.log(is_theme_dark)
    }, [is_theme_dark])

  return (
    <div className={`w-screen h-screen flex items-center bg-gray-600/30 background`}>
        <Education/>
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
                    setEducationModal={setEducationModal}
                    is_theme_dark={is_theme_dark} />
                <div className='w-full h-3/6 md:h-full flex right-transition md:bg-blue-600/20'>
                <Contact
                    is_theme_dark={is_theme_dark}/>
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