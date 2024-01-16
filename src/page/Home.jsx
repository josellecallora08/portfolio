import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


import Awards from '../component/Awards'
import About from '../component/About'
import Contact from '../component/Contact'
import Education from '../component/Education'
import Navigation from '../component/Navigation'
import Project from '../component/Project'
import ThemeMode from '../component/ThemeMode'
import Work from '../component/Work'

const Home = () => {
    const is_theme_dark = useSelector((state) => state.theme === 'dark');
    const [awardsModal, setAwardsModal] = useState(false)
    const [aboutModal, setAboutModal] = useState(false)
    const [educationModal, setEducationModal] = useState(false)
    const [projectModal, setProjectModal] = useState(false)
    const [workModal, setWorkModal] = useState(false)
   
    useEffect(() => {
        document.documentElement.classList.toggle('dark', is_theme_dark);
        console.log(is_theme_dark)
    }, [is_theme_dark])
    
    useEffect(() => {
        const close_modal = false;
    
        const closeModalStates = () => {
            setAwardsModal(close_modal);
            setAboutModal(close_modal);
            setEducationModal(close_modal);
            setProjectModal(close_modal);
            setWorkModal(close_modal);
        };
    
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModalStates();
            }
        };
    
        document.addEventListener('keydown', handleKeyDown);
    
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    

  return (
    <div className={`w-full h-screen flex items-center`}>
       <div className={`relative w-screen h-screen grid md:flex md:flex-wrap md:w-4/5 md:h-4/5 m-auto rounded-md bg-slate-200 md:bg-slate-400 dark:bg-black/50 shadow-xl open-card ${awardsModal || aboutModal || educationModal || projectModal || workModal ? 'duration-500 opacity-0' : ''}`}>
            <div className={`w-4/5 h-4/5 md:w-full md:h-3/6 flex flex-wrap items-center justify-center  m-auto text-center  bounce`}>
                <article className='mt-8'>
                    <h1 className='text-2xl md:text-5xl uppercase tracking-wider font-black font-mono dark:text-slate-300 cursor-default show'>Joselle E. Callora</h1>
                    <p className='text-sm text-center md:text-center md:w-4/5 m-auto md:text-base dark:text-slate-300 md:px-10 py-5 tracking-wider capitalize font-mono up cursor-default' >
                        A dedicated website developer with expertise in MongoDB, ExpressJs, NodeJs, React, HTML, CSS, PHP - Procedural, MySQL, and JavaScript. With strong problem-solving and communication skills, I thrive in challenging projects, committed to exceptional results and project success.
                    </p>
                </article>
            </div>
            <div className='grid gap-2 w-4/5 h-4/5 md:gap-0 md:h-3/6 md:w-full md:flex m-auto'>
                <Navigation
                    setAboutModal={setAboutModal}
                    setAwardsModal={setAwardsModal}
                    setEducationModal={setEducationModal}
                    setProjectModal={setProjectModal}
                    setWorkModal={setWorkModal}
                    is_theme_dark={is_theme_dark} />
                <div className='w-full h-3/6 md:h-full flex right-transition md:bg-blue-600/20'>
                    <Contact
                    is_theme_dark={is_theme_dark}/>
                </div>
            </div>
            <ThemeMode
            is_theme_dark={is_theme_dark}/>
        </div>  
        <About
            aboutModal={aboutModal}
            setAboutModal={setAboutModal}
            is_theme_dark={is_theme_dark} />
        <Awards
            awardsModal={awardsModal}
            setAwardsModal={setAwardsModal}
            is_theme_dark={is_theme_dark} />
       <Education
            educationModal={educationModal}
            setEducationModal={setEducationModal}
            is_theme_dark={is_theme_dark} />
        <Project
            projectModal={projectModal}
            setProjectModal={setProjectModal}
            is_theme_dark={is_theme_dark} /> 
        <Work
            workModal={workModal}
            setWorkModal={setWorkModal}
            is_theme_dark={is_theme_dark} />
    </div>
  )
}

export default Home