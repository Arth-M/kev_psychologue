"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
    const firstSection = document.querySelector("#section-1");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show navbar background only when the hero is OUT of view
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.8 } // tune this to decide WHEN to activate the navbar
    );

    firstSection ? observer.observe(firstSection) : setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      id="nav-div"
      className={`w-full z-90 tracking-wide text-xl not-arrow-up fixed top-0 left-0 `}
    >
      <div
        className={`opacity-70 ${
          isVisible
            ? "bg-white opacity-100 ease-in-out transition-colors duration-200 shadow-sm"
            : "bg-transparent ease-in-out transition-colors duration-200"
        } mx-auto relative md:px-10 lg:px-5 pt-4 pb-2 w-full h-full min-h-20 items-center px-4 `}
      >
        {/* logo et bouton doctolib */}
        <div
          className={`w-35 h-20 overflow-hidden absolute -top-4 -left-5 ${
            isVisible
              ? "fill-mako-900 ease-in-out transition-colors duration-200"
              : "fill-mako-800 ease-in-out transition-colors duration-200"
          }`}
          id="phoenix-logo"
        >
          <span className="sr-only">Logo de Kevin Nicolas, Psychologue</span>
          <a href="/">
            {/* <svg className="h-16" viewBox="0 0 512 512">
              <path d="m510.857 135.967c-3.075-5.943-9.271-9.587-15.883-9.447-8.155-20.968-29.763-34.278-52.889-31.248l-31.049 4.077c-6.463.851-12.831-.402-18.471-3.582-1.764-1.192-3.912-1.84-6.192-1.694-5.513.338-9.707 5.082-9.368 10.594.065 1.052.168 2.121.307 3.177 2.068 15.748 11.938 28.591 25.204 35.16-7.774 7.532-15.235 15.388-22.358 23.515-6.112-43.856-35.773-83.546-79.808-100.956-27.251-11.101-49.33-32.324-60.869-59.476-1.523-3.585-4.99-5.959-8.884-6.084-3.91-.125-7.656 2.327-9.405 5.807-9.391 19.021-12.23 41.263-7.721 62.081 1.177 5.43 2.831 10.733 4.926 15.845-.182-.174-.362-.349-.543-.524-2.87-2.783-7.121-3.59-10.809-2.053-3.689 1.537-6.109 5.124-6.153 9.12-.104 9.301.487 18.912 1.691 28.084 2.592 19.426 11.69 37.677 25.354 51.538-1.114.511-2.146 1.233-3.034 2.154-2.985 3.102-3.65 7.766-1.651 11.579 15.776 30.09 39.299 55.709 68.022 74.088.075.048.151.095.228.141 8.022 4.835 13.322 12.928 14.54 22.201.406 3.095.007 6.111-1.027 8.844-22.84-1.176-39.006-10.564-57.634-21.422-18.569-10.824-39.615-23.091-71.003-29.708-35.99-7.585-73.193-1.283-104.768 17.748-30.388 18.315-53.565 46.923-65.265 80.552-1.57 4.515.273 9.509 4.401 11.92 4.127 2.41 9.384 1.563 12.544-2.021 12.939-14.673 28.729-26.824 46.271-35.818-7.196 4.789-14.078 10.146-20.519 16.013-28.102 25.604-45.492 58.384-48.967 92.305-.486 4.755 2.459 9.19 7.031 10.584 4.57 1.396 9.492-.642 11.74-4.859 12.082-22.653 30.036-42.291 51.674-56.818-9.351 8.15-18.029 17.398-25.838 27.607-24.845 32.485-37.517 70.665-35.681 107.506.24 4.833 3.907 8.8 8.706 9.42.433.056.862.083 1.288.083 4.306 0 8.196-2.783 9.526-6.981 9.019-28.47 28.761-56.129 55.59-77.881 26.333-21.351 57.608-35.65 88.063-40.264 5.461-.828 9.217-5.925 8.389-11.385-.827-5.461-5.919-9.214-11.385-8.389-33.922 5.14-68.605 20.944-97.663 44.503-12.144 9.846-22.994 20.823-32.281 32.55 5.239-12.85 12.398-25.327 21.335-37.011 21.261-27.798 50.855-48.216 81.197-56.021 23.767-6.113 30.316-6.265 45.746-5.801 5.117.165 9.506-3.566 10.205-8.625.7-5.06-2.525-9.833-7.48-11.072-35.392-8.844-74.155-4.345-109.154 12.667-14.146 6.876-27.313 15.588-39.129 25.78 5.829-8.204 12.712-15.963 20.557-23.11 23.333-21.256 53.028-34.883 81.471-37.386 28.579-2.514 39.593.319 56.262 4.61 3.271.842 6.654 1.713 10.415 2.607 4.844 1.153 9.796-1.433 11.619-6.064s-.036-9.899-4.363-12.358c-50.007-28.422-113.777-25.394-164.994 4.011 8.453-9.198 18.208-17.208 29.014-23.721 27.226-16.41 59.301-21.847 90.318-15.307 28.229 5.95 46.951 16.863 65.057 27.416 14.498 8.451 28.432 16.565 45.502 20.944-1 1.806-1.462 3.931-1.173 6.134.661 5.035 4.958 8.7 9.902 8.699.434 0 .873-.028 1.314-.086 20.956-2.751 35.767-22.039 33.017-42.996-2.01-15.297-10.727-28.649-23.925-36.653-17.41-11.158-32.688-25.275-45.129-41.587 16.905 5.067 34.377 7.859 52.223 8.329 5.181.135 9.618-3.718 10.199-8.875.582-5.157-2.877-9.902-7.965-10.925-18.752-3.771-36.712-10.452-53.382-19.855-19.314-10.896-32.597-30.529-35.477-52.108-.104-.795-.23-1.804-.324-2.602 17.672 13.449 37.567 23.998 58.549 30.958 4.927 1.633 10.283-.773 12.334-5.539 2.052-4.767.115-10.311-4.458-12.765-10.6-5.687-20.676-12.466-29.95-20.148-21.307-17.649-30.792-44.72-26.188-70.673 14.691 22.295 36.579 39.719 61.983 49.695-.44-.097.253.119.121.051 53.84 22.194 80.883 84.031 59.403 138.363-2.03 5.136.487 10.946 5.623 12.977 5.137 2.03 10.946-.487 12.977-5.623 4.306-10.892 6.987-22.031 8.173-33.15 13.429-17.087 31.03-35.339 47.22-49.866-.145.016-.28.028.011-.01 5.476-.719 10.223-5.828 9.504-11.304s-5.746-9.337-11.217-8.613c-8.602 1.13-16.782-2.128-22.297-8.031 3.22.204 6.483.104 9.76-.326l31.049-4.077c13.352-1.753 25.867 5.608 31.11 17.403-24.301 13.947-40.294 38.546-42.401 66.029-4.148 54.1-18.075 96.069-41.395 124.742-13.549 16.659-30.639 29.237-50.794 37.382-22.482 9.086-49.517 12.988-80.338 11.596-5.539-.251-10.192 4.021-10.441 9.539s4.022 10.192 9.539 10.441c4.376.198 8.679.296 12.914.296 58.792 0 104.046-19.021 134.636-56.635 25.938-31.894 41.354-77.594 45.82-135.833 1.746-22.777 16.195-42.996 37.774-52.973l2.965-.389c1.921 2.476 4.868 3.864 7.904 3.863 1.548 0 3.119-.36 4.588-1.121 4.906-2.54 6.825-8.573 4.287-13.479z" />
              <path d="m427.89 147.455c-.004.003-.007.007-.011.01.152-.017.315-.038.011-.01z" />
            </svg> */}
            <Image
              src="/images/phoenix_shutter.webp"
              alt="Image d'un caillou taillé"
              width={347}
              height={280}
              preload={true}
              className="object-cover object-bottom ml-0 rounded shadow"
            />
          </a>
        </div>
        <a
          href="https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues"
          className="absolute top-4 right-15 lg:top-3.5 lg:right-5 sansation-bold bg-cyan-400 text-white text-2xl px-4 py-2 rounded-4xl"
          target="_blank"
        >
          <p className="drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] inline">
            Doctolib
          </p>
        </a>

        {/* menu ordi et tablettes */}
        <div className="hidden lg:flex lg:flex-nowrap space-x-4 items-center w-full pt-1 justify-end pr-35 text-mako-500">
          <a
            href="/"
            className={`rounded-md font-light text-md  hover:bg-mako-50 hover:text-mako-500 px-2 py-1`}
          >
            Accueil
          </a>
          <a
            href="/mon-parcours"
            className={`text-nowrap  rounded-md font-light text-md  hover:text-mako-500 hover:bg-mako-50 px-2 py-1`}
          >
            Mon parcours
          </a>
          <a
            href="/emdr"
            className={`text-nowrap rounded-md font-light text-md hover:text-mako-500 hover:bg-mako-50 px-2 py-1`}
          >
            Thérapie EMDR
          </a>
          <a
            href="/consultations"
            className={`rounded-md font-light inline text-md  ${"  hover:text-mako-500 hover:bg-mako-50 px-2 py-1"}`}
          >
            Consultations
          </a>
        </div>
      </div>

      {/* Mobile burger menu icone */}
      <div
        className="absolute inset-y-0 right-0 flex items-center justify-center lg:hidden"
        ref={menuRef}
      >
        {/* Mobile menu button with hamburger icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          className="relative inline-flex items-center justify-center content-center pt-1 rounded-md my-auto px-0 text-gray-900  focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500 z-50"
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            className="absolute -top-3 right-3 h-6 w-6"
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

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed right-0 top-15 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } flex justify-end rounded-l-xl transition-transform duration-400 z-80 bg-white`}
      >
        <div className="space-y-1 border border-sky-200 bg-sky-50 rounded-l-xl px-2 pt-2 pb-3 w-fit z-80">
          <a
            href="/"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg ease-in duration-100 text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Accueil
          </a>
          <a
            href="/mon-parcours"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg ease-in duration-100 text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Mon parcours
          </a>
          <a
            href="/emdr"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg ease-in duration-100 text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Thérapie EMDR
          </a>
          <a
            href="/consultations"
            className="block font-light rounded-md px-3 py-2 text-base text-gray-700  hover:text-gray-950 hover:text-lg ease-in duration-100 text-right whitespace-nowrap"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Consultations
          </a>
        </div>
      </div>
    </nav>
  );
}
