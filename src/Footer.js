import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="flex xl:flex-row flex-col-reverse justify-between items-center w-full xl:h-16 text-center border-t-[1px] border-[#191919] text-white text-sm font-light mt-20 bg-black xl:px-6 px-4 py-4 xl:gap-0 gap-6">
    <p className='flex-1 text-start'>Copyright 2024 © Abhiroop Chaudhuri</p>

    <div className='flex flex-row h-full justify-center items-center gap-4 flex-1'>
     
      <Link to="./">Home</Link>
      <Link to="./frontend-projects">Front-End Development Projects</Link>
      <Link to="https://www.behance.net/abhiroopchaudhuri">UX Design Projects</Link>
      
    </div>
    <div className='flex flex-row h-full justify-end items-center gap-4 flex-1'>
    <div className=' h-8 w-8'><a className='' href="https://www.behance.net/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/303415/behance-2-logo.svg"/></a></div>

    <div className=' h-8 w-8'><a className='' href="https://www.linkedin.com/in/abhiroopchaudhuri" target="_blank" rel="noopener noreferrer"><img src="https://www.svgrepo.com/show/303207/linkedin-icon-logo.svg"/></a></div>

    <div className=' h-8 w-8'><a className='' href="https://github.com/abhicode7" target="_blank" rel="noopener noreferrer"><img src="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"/></a></div>
    
    
    </div>
  </footer>
  )
}

export default Footer
