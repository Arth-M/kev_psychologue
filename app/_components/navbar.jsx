'use client'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const menuRef = useRef(null)




  // Handle clicking outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <nav
      className='w-screen py-3 bg-transparent tracking-wide text-lg not-arrow-up'
      ref={menuRef}
    >
      <div id='nav-div' className="mx-auto w-screen px-2 md:px-10">
        <div className="relative w-full flex flex-nowrap items-center justify-between px-4 mx-auto">
          <div className="inset-y-0 left-0 flex items-center" id="novurbaButton">
            <span className="sr-only">Logo de Novurba</span>
            <a
              href="/"
              rel="keep-params"
            >
              <Image
              src="/images/6410514c268519ca04980d2a_Logo essai 3.png"
              alt="Logo de Novurba"
              width="463"
              height="452"
              preload="true"
              priority="true"
              className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
              // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
            />
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-end min-w-[500px] ">
            {/*  */}
            {/* https://www.linkedin.com/public-profile/in/raphaël-sinet-1a917a86/
            */}
            <a href="https://www.linkedin.com/company/novurba/" className=" hover:animate-pulse" target="_blank" rel="noopener noreferrer" title="Voir le profil LinkedIn de Raphaël Sinet">
              <svg className="w-6 h-fit text-copperfield-600 mr-10 my-auto pb-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM2 21h6V9H2v12ZM8.5 21h5.5v-6.6c0-1.5.3-2.9 2-2.9 1.7 0 1.7 1.4 1.7 2.8V21H24v-7.1c0-4-2.1-5.9-5-5.9-2.3 0-3.3 1.3-3.8 2.2h.1V9H8.5c.1 1.2 0 12 0 12Z" clipRule="evenodd"/>
                </svg>
              <span className="sr-only">LinkedIn profile</span>
            </a>
            <div className="space-x-2 justify-end items-center text-copperfield-500">
              <a
                href="/"
                className={`rounded-md font-light text-md   ${
                  'hover:bg-copperfield-50 hover:text-copperfield-500 px-2 py-1'
                }`}
              >
                Accueil
              </a>
              <a
                href="/notre-expertise"
                className={`rounded-md font-light text-md   ${
                  '   hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1'
                }`}
              >
                Notre expertise
              </a>
              <a
                href="/nos-realisations"
                className={`rounded-md font-light text-md  ${
                  '   hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1'
                }`}
              >
                Nos réalisations
              </a>
              <a
                href="/entreprise"
                className={`rounded-md font-light text-md  ${
                 '  hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1'
                }`}
              >
                L'entreprise
              </a>

            </div>

          </div>


          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 lg:hidden">
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="relative inline-flex items-center justify-center content-center rounded-md my-auto px-0 text-gray-600  focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} flex justify-end`}
      >
        <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-50 w-fit">
          <a
            href="/"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="/notre-expertise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Notre expertise
          </a>
          <a
            href="/nos-realisations"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nos réalisations
          </a>
          <a
            href="/entreprise"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            L'entreprise
          </a>

        </div>
      </div>
    </nav>
  )
}
