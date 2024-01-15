import React from 'react'
import work from '/work-icon.svg'
import project from '/portfolio2-icon.svg'
import award from '/award-icon.svg'
import education from '/education-icon.svg'
import about from '/about-icon.svg'
import d_work from '/work-dark-icon.svg'
import d_project from '/portfolio2-dark-icon.svg'
import d_award from '/award-dark-icon.svg'
import d_education from '/education-dark-icon.svg'
import d_about from '/about-dark-icon.svg'


const Navigation = ({handleModal, is_theme_dark, setEducationModal}) => {
  return (
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
                <li className='flex items-center gap-2 p-2 px-5 border w-fit rounded-md hover:bg-slate-100/30' onClick={() => setEducationModal(prevState => !prevState)}>
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
  )
}

export default Navigation