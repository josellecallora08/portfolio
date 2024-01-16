import React from 'react'
import { useDispatch } from 'react-redux';
import moon from '/moon-icon.svg'
import sun from '/sun-icon.svg'
import { toggleTheme } from '../features/themeslice'


const ThemeMode = ({is_theme_dark}) => {
    const dispatch = useDispatch()
    
    const handleTheme = () => {
        dispatch(toggleTheme())
    }

    
  return (
    <div className='absolute top-0 right-0 flex items-center justify-center w-20 h-20' >
      <div className={`hover:p-1 rounded-full cursor-pointer hover:bg-gray-200/30 dark:hover:bg-white duration-500`} onClick={handleTheme}>
          <img src={is_theme_dark ? moon : sun} alt="moon" className='w-7 h-7 md:w-9 md:h-9 xl:w-12 xl:h-12'/>
      </div>
    </div>
  )
}

export default ThemeMode