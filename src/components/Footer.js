import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center bg-black-600 bg-opacity-35 text-neutral-100 py-10'>
        <div className='flex items-center justify-center gap-4'>
          <Link to="https://hechadi.com/" >About</Link>
          <Link to="https://www.linkedin.com/in/el-hassania-hechadi/">Contact</Link>
        </div>
        <p className='text-sm'>Created By EL Hassania Hechadi</p>
    </footer>
  )
}

export default Footer
