"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false)
  const menuRef = useRef(null);

  // Handle clicking outside to close menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const navDiv = document.querySelector('#nav-div')
    const isMobile = window.innerWidth < 1000 // you can tweak this breakpoint
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === 'section-1') {
            const wasVisible = isVisible
            const nowVisible = !entry.isIntersecting
            setIsVisible(nowVisible)

            // Only pulse once when visibility state changes for the first time
            // if (!hasPulsed.current && wasVisible !== nowVisible) {
            //   const navDiv = document.querySelector("#nav-div")
            //   if (navDiv) {
            //     navDiv.classList.add('pulsing')
            //     setTimeout(() => {
            //       navDiv.classList.remove('pulsing')
            //       navDiv.classList.remove('opacity-70')
            //     }, 1000)
            //     hasPulsed.current = true // Mark as pulsed permanently
            //   }
            // }
          }
        })
      },
      {
        threshold: isMobile ? 0.5 : 0.7,
        rootMargin: isMobile ? '0px 0px 0% 0px' : '0px 0px 0% 0px',
      }
    )

    const firstSection = document.querySelector('#section-1')
    if (firstSection) {
      observer.observe(firstSection)
    }

    return () => {
      if (firstSection) observer.unobserve(firstSection)
      observer.disconnect()
    }
  }, [])


  return (
    <nav id="nav-div"
      className={`w-full z-90 opacity-70 py-3 tracking-wide text-lg not-arrow-up fixed
      ${isVisible ? 'bg-white border-b border-b-teal-600 opacity-100' : 'bg-transparent'}`}
    >
        <div className="mx-auto relative md:px-10 w-full items-center justify-between px-4 grid grid-cols-[minmax(60px,1fr)_minmax(200px,4fr)_minmax(15px,0.5fr)] lg:grid-cols-[minmax(400px,3fr)_minmax(40px,1fr)_minmax(400px,3fr)]">
          <div className="hidden lg:flex flex-nowrap items-center justify-end min-w-[402px] px-2">
            <div className="space-x-2 justify-end items-center text-copperfield-500">
              <a
                href="/"
                className={`rounded-md font-light text-md   ${"hover:bg-copperfield-50 hover:text-copperfield-500 px-2 py-1"}`}
              >
                Accueil
              </a>
              <a
                href="/mon-parcours"
                className={`rounded-md font-light text-md   ${"   hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1"}`}
              >
                Mon parcours
              </a>
              <a
                href="/emdr"
                className={`rounded-md font-light text-md  ${"   hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1"}`}
              >
                Thérapie EMDR
              </a>
            </div>
          </div>
          <div
            className="flex content-center lg:justify-center justify-start min-w-[50px]"
            id="phoenix-logo"
          >
            <span className="sr-only">Logo de Kevin Nicolas, Psychologue</span>
            <a href="/" rel="keep-params">
              <Image
                src="/images/child3.svg"
                alt="Logo de Novurba"
                width="300"
                height="300"
                preload="true"
                className="object-cover w-fit h-15 self-center justify-self-center"
              />
            </a>
          </div>
          <div className="hidden lg:inline  items-center min-w-[402px] px-2">
            <div className="space-x-2 justify-start items-center text-copperfield-500">
              <a
                href="/pour-qui"
                className={`rounded-md font-light text-md  ${"  hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1"}`}
              >
                Pour qui
              </a>
              <a
                href="/informations-pratiques"
                className={`rounded-md font-light inline text-md  ${"  hover:text-copperfield-500 hover:bg-copperfield-50 px-2 py-1"}`}
              >
                Me contacter
              </a>
              <a href="https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues"
              className="bg-mantis-500 text-white px-3 py-2 rounded-3xl inline ml-8">
                Doctolib
              </a>
            </div>
          </div>

          <div className="flex items-center justify-end lg:hidden">
            <a href="https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues"
              className="bg-mantis-500 text-white px-3 py-2 rounded-3xl inline">
                Doctolib
              </a>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center justify-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0 lg:hidden"
          ref={menuRef}>
            {/* Mobile menu button with hamburger icon */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
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
                      ? "M6 18L18 6M6 6l12 12"
                      : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed right-0 ${
          isMobileMenuOpen ? "block translate-x-0" : "translate-x-full"
        } flex justify-end transition-transform duration-400`}
      >
        <div className="space-y-1 border border-sky-200 bg-sky-50 rounded-l-xl px-2 pt-2 pb-3 w-fit">
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
  );
}
