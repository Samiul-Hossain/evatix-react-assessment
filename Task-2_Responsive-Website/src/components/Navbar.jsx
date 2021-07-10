import React, { useEffect, useState } from 'react'
import LogoWhite from '../assets/logo_white@2x.png'
import LogoBlack from '../assets/logo_01@2x.png'

const Navbar = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
    return () => {
      window.removeEventListener('scroll', changeBackground)
    }
  })

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  return (
    <>
      <div
        className={
          show
            ? 'fixed top-0 left-0 right-0 bg-white'
            : 'fixed top-0 left-0 right-0 bg-transparent'
        }
      >
        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b border-gray-100 py-4 md:justify-start md:space-x-10'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <a href='#'>
                <img
                  className='h-8 w-auto sm:h-10'
                  src={show ? LogoBlack : LogoWhite}
                  alt=''
                />
              </a>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <button
                type='button'
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                aria-expanded='false'
              >
                <span className='sr-only'>Open menu</span>

                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
            <nav className='hidden md:flex space-x-10'>
              <a
                href='#'
                className={
                  show
                    ? 'text-base font-bold hover:text-gray-900'
                    : 'text-base font-bold text-white hover:text-gray-900'
                }
              >
                Home
              </a>
              <a
                href='#'
                className={
                  show
                    ? 'text-base font-medium hover:text-gray-900'
                    : 'text-base font-medium text-white hover:text-gray-900'
                }
              >
                Portfolio
              </a>
            </nav>
            <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
              <a
                href='https://samiul-hossain.github.io/personal-website/'
                className={
                  show
                    ? 'ml-8 whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-white bg-purple-700'
                    : 'ml-8 whitespace-nowrap inline-flex items-center justify-center px-12 py-2 border border-transparent rounded-3xl shadow-sm text-base font-bold text-purple-700 bg-white'
                }
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
