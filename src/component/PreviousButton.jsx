import React from 'react'
import previous from '/previous-icon.svg'
import d_previous from '/previous-dark-icon.svg'

const PreviousButton = ({handlePrevious, is_theme_dark}) => {
  return (
    <div className={`hover:p-2 rounded-full cursor-pointer hover:bg-gray-200/30 dark:hover:bg-white duration-500`} onClick={handlePrevious}>
        <img src={is_theme_dark ? d_previous : previous} alt="previous button" className='w-7 h-7 md:w-9 md:h-9 xl:w-10 xl:h-10'/>
    </div>
  )
}

export default PreviousButton