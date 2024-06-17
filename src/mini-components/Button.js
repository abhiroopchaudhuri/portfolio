import React from 'react'
import {twMerge} from 'tailwind-merge'

const Button = ({className, icon, children}) => {

  
  return (
    <button className= {twMerge('bg-pink-500 px-4 py-2 rounded-md flex flex-row justify-center items-center gap-2 text-black hover:bg-opacity-[70%] active:bg-opacity-[40%] transition-all duration-300', className)}>
        <div className='w-6 h-6 flex items-center' dangerouslySetInnerHTML={{ __html: icon }}></div>
          {children}
        </button>
  )
}

export default Button