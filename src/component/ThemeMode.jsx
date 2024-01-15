import React from 'react'
import { useDispatch } from 'react-redux';
import moon from '../assets/images/moon-icon.svg'
import sun from '../assets/images/sun-icon.svg'
import { toggleTheme } from '../features/themeslice'


const ThemeMode = ({is_theme_dark}) => {
    const dispatch = useDispatch()
    
    const handleTheme = () => {
        dispatch(toggleTheme())
    }

    
  return (
    <div className={`hover:p-2 rounded-full cursor-pointer hover:bg-gray-200/30 dark:hover:bg-white duration-500`} onClick={handleTheme}>
        <img src={is_theme_dark ? moon : sun} alt="moon" className='w-7 h-7 md:w-9 md:h-9 xl:w-12 xl:h-12'/>
    </div>
  )
}

export default ThemeMode