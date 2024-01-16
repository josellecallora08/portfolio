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

    const navigation = [
        {
            "name":"About",
            "image":about,
            "d_image":d_about,
            "modal":setAboutModal
        },
        {
            "name":"Awards",
            "image":award,
            "d_image":d_award,
            "modal":setAwardsModal

        },
        {
            "name":"Education",
            "image":education,
            "d_image":d_education,
            "modal":setEducationModal

        },
        {
            "name":"Project",
            "image":project,
            "d_image":d_project,
            "modal":setProjectModal

        },
        {
            "name":"Work",
            "image":work,
            "d_image":d_work,
            "modal":setWorkModal

        },
    ]

  return (
    <div className='w-full h-3/6 md:h-full flex items-center left-transition md:bg-green-800/20 dark:text-slate-300'>
        <div className='w-full md:w-4/5 h-4/5 flex items-center py-5 m-auto font-mono text-xs md:text-lg'>
            <ul className='flex m-auto items-center gap-2 flex-wrap cursor-pointer'>
                { navigation.map((value,key)=> (
                <li className='flex items-center gap-2 p-2 px-5 border md:border-0 w-fit md:w-full rounded-md hover:bg-slate-100/30' onClick={() => value.modal(prevState => !prevState)}>
                    <img src={is_theme_dark ? value.d_image : value.image} width='20px' height='20px' alt="" className=''/>
                    <span>{value.name}</span>
                </li>))}
            </ul>
        </div>
    </div>
  )
}

export default Navigation