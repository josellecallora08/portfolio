import React, { useEffect } from 'react'
import moon from '../assets/images/moon-icon.svg'
import sun from '../assets/images/sun-icon.svg'

import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../features/themeslice'

const Home = () => {
    const dispatch = useDispatch()
    const is_theme_dark = useSelector((state) => state.theme === 'dark');
    
    const handleTheme = () => {
        dispatch(toggleTheme())
    }

    useEffect(() => {
        document.documentElement.classList.toggle('dark', is_theme_dark);
        console.log(is_theme_dark)
    }, [is_theme_dark])
    

  return (
    <div className='w-screen h-screen flex items-center bg-gray-600/30 background'>
        <div className='relative w-screen h-screen grid grid-rows-2 md:flex md:flex-wrap md:w-4/5 md:h-4/5 border m-auto rounded-md bg-white dark:bg-black shadow-xl open-card' >
            <div className='w-4/5 h-4/5 md:w-full md:h-3/6 flex flex-wrap items-center justify-center  m-auto text-center bounce'>
                <article className='mt-5'>
                    <h1 className='text-2xl md:text-5xl uppercase tracking-wider font-semibold font-mono dark:text-slate-300 show'>Joselle E. Callora</h1>
                    <p className='text-sm text-justify md:text-center md:w-4/5 m-auto md:text-base dark:text-slate-300 md:px-10 py-5 tracking-wider capitalize font-mono up cursor-default'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ex minima debitis explicabo corrupti, distinctio minus excepturi quasi similique impedit rerum quos neque mollitia ut, odio et, iure ipsa earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente ex minima debitis explicabo corrupti, distinctio minus excepturi quasi similique impedit rerum quos neque mollitia ut, odio et, iure ipsa earum!</p>
                </article>
            </div>
            <div className='w-4/5 h-4/5 md:h-3/6 md:w-full md:flex m-auto'>
                <div className='w-full h-3/6 md:h-full left-transition md:bg-green-800/20 dark:text-slate-300'>
                   <div className='w-full md:w-4/5 h-4/5 py-5 m-auto font-mono xl:text-2xl'>
                        <ul className='flex gap-2 flex-wrap'>
                            <li className='p-2 px-5 border w-fit rounded-md'>Work</li>
                            <li className='p-2 px-5 border w-fit rounded-md'>Project</li>
                            <li className='p-2 px-5 border w-fit rounded-md'>Education</li>
                            <li className='p-2 px-5 border w-fit rounded-md'>Awards</li>
                            <li className='p-2 px-5 border w-fit rounded-md'>About</li>
                            <li className='p-2 px-5 border w-fit rounded-md'></li>
                        </ul>
                   </div>
                </div>
                <div className='w-full h-3/6 md:h-full right-transition md:bg-blue-600/20'>
                    <article className='w-full md:w-4/5 h-4/5 py-5 m-auto'>
                        <h2 className='relative w-fit md:text-3xl uppercase font-semibold font-mono group cursor-default dark:text-slate-300'>Interact With Me 
                            <span className='absolute left-0 bottom-0 border-b-2 w-full md:w-0 border-black dark:border-white md:group-hover:w-full duration-500'></span>
                        </h2>
                    </article>
                </div>
            </div>
            <div className='absolute top-0 right-0 flex items-center justify-center w-20 h-20' >
                <div className={`hover:p-2 rounded-full cursor-pointer hover:bg-gray-200/30 dark:hover:bg-white duration-500`} onClick={handleTheme}>
                    <img src={is_theme_dark ? moon : sun} alt="moon" className='w-10 h-10 md:w-9 md:h-9 xl:w-12 xl:h-12'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home