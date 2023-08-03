import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed bottom-0 w-full h-20 text-center text-[30px] text-[#e4b1b1]'>
        <p>Copyright @ {new Date().getFullYear()} Abhishek Sharma</p>
    </footer>
  )
}

export default Footer