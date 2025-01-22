import React from 'react'

const Header = () => {
  return (
    <>
        <header className='max-w-7xl m-auto flex justify-between items-center h-24'>
            <a href=""><img src="../../public/logo.png" alt="logo" className='w-48' /></a>
            <nav className="">
                <ul className='flex text-white gap-16 font-bold'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header