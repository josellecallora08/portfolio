import React from 'react'
import close from '/close-icon.svg'
import d_close from '/close-dark-icon.svg'

const CloseButton = ({is_theme_dark, setCloseModal}) => {
  return (
    <div className='absolute top-0 right-0 flex items-center justify-center w-20 h-20 cursor-pointer' onClick={() => setCloseModal(prevState => !prevState)} >
        <div className='hover:p-1 rounded-full cursor-pointer hover:bg-gray-600/20 dark:hover:bg-gray duration-500'>
            <img src={is_theme_dark ? d_close : close} className='w-7 h-7 md:w-9 md:h-9 xl:w-12 xl:h-12' alt="" />
        </div>
    </div>
  )
}

export default CloseButton