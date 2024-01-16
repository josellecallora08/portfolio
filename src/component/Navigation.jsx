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


const Navigation = ({is_theme_dark,setAboutModal, setAwardsModal, setEducationModal, setProjectModal, setWorkModal}) => {
  return (
    <div className='w-full h-3/6 md:h-full flex items-center left-transition md:bg-green-800/20 dark:text-slate-300'>
        <div className='w-full md:w-4/5 h-4/5 flex items-center py-5 m-auto font-mono xl:text-xl'>
            <ul className='flex m-auto items-center gap-2 flex-wrap cursor-pointer'>
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => setAboutModal(prevState => !prevState)}>
                    <img src={is_theme_dark ? d_about : about} width='20px' height='20px' alt="" className=''/>
                    <span>About</span>
                </li>
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => setAwardsModal(prevState => !prevState)}>
                    <img src={is_theme_dark ? d_award : award} width='20px' height='20px' alt="" className=''/>
                    <span>Awards</span>
                </li>
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => setEducationModal(prevState => !prevState)}>
                    <img src={is_theme_dark ? d_education : education} width='20px' height='20px' alt="" className=''/>
                    <span>Education</span>
                </li>
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => setProjectModal(prevState => !prevState)}>
                    <img src={is_theme_dark ? d_project : project} width='20px' height='20px' alt="" className='' />
                    <span>Project</span>
                </li>
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => setWorkModal(prevState => !prevState)}>
                    <img src={is_theme_dark ? d_work : work} width='20px' height='20px' alt="" className=''/>
                    <span>Work</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation