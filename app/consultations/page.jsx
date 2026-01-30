'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Consultations() {
  useEffect(() => {
        const contentToShow = document.querySelectorAll(".to-show")
        const observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              entry.target.classList.toggle("show", entry.isIntersecting)
              if (entry.isIntersecting) observer.unobserve(entry.target)
            })
          },
          {
            threshold: 0.2,
            rootMargin: "-15px"

          }
        )

        contentToShow.forEach(content => {
          observer.observe(content)
        })
      }, [])

  return (
    <div className="p-0 m-0 ">
      <div className="bg-gray-400">
      <div className="relative mt-20 to-show animate-on-scroll">
      <div className="w-fit absolute z-40 top-10 left-5 sm:top-12 sm:left-15 lg:left-35 to-show animate-on-scroll">
        <h1 className="text-3xl text-center rounded-r-lg py-2 md:pl-30 md:pr-4 px-4 text-white font-light tracking-wider">
          Consultations
        </h1>
        <hr className="w-25 text-white md:ml-30 ml-4" />
      </div>
      <div className="absolute background-bureau top-200 md:top-150 lg:left-5 md:left-0 md:w-1/2 w-4/5 h-90 to-show animate-on-scroll"></div>
      <div className="absolute background-bureau-2 top-70 right-0 md:top-65 md:right-0 lg:right-5 md:w-1/2 w-4/5 h-90 to-show animate-on-scroll"></div>
      <div className="pt-35 relative to-show animate-on-scroll">
        <div id="infos-pratiques" className="scroll-mt-30 flex flex-nowrap w-full pl-5 md:pl-25 mb-5 z-90 text-lg to-show">
          <h2 className="relative rounded pl-5 pr-2 py-0.5 text-gray-400 bg-gray-200
          before:content-[''] before:absolute before:left-1.5 before:top-1/2
          before:-translate-y-1/2 before:w-2 before:h-2
          before:rounded-full before:bg-gray-400">Informations pratiques</h2>
          {/* <div className="w-0.5 h-7 bg-gray-500 mt-1"></div> */}
          <a href="#pour-qui" className="group hover:scale-104">
            <h2 className="rounded-r px-3 py-1 text-gray-300 group-hover:text-gray-200 ml-5">Pour qui ↓
            </h2>
            <hr
              className="w-fit border-t
              border-gray-200
                -mt-1.5
                ml-9
                mx-auto
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-[58%]"
            />
          </a>
        </div>

      <div className="relative mb-20 sm:mb-15 md:px-10 flex items-center justify-start">
        <div className="w-[344px] px-5 md:min-w-sm md:px-10 md:w-auto py-5 rounded-r-2xl pl-15 md:text-white md:bg-transparent bg-gray-100/80 text-gray-600">
          <hr className='text-gray-600 md:text-white w-1/3 -ml-10 '/>
          <div className="w-fit">
          <p className="mt-5">
            Sur rendez-vous uniquement <br />
          </p>
          <hr className='text-gray-200/50 w-full'/>
          </div>
          <div className="grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center mt-5">
            <svg viewBox="0 0 64 64"
            width="512" height="512"
            className="w-10 h-10 md:fill-white fill-gray-600">
              <g id="Calendar">
                <path d="M57,8H52V6a4,4,0,0,0-8,0V8H36V6a4,4,0,0,0-8,0V8H20V6a4,4,0,0,0-8,0V8H7a5,5,0,0,0-5,5V53a5,5,0,0,0,5,5H35a1,1,0,0,0,0-2H7a3.009,3.009,0,0,1-3-3V22H60V39a1,1,0,0,0,2,0V13A5,5,0,0,0,57,8ZM46,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM30,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM14,6a2,2,0,0,1,4,0v6a2,2,0,0,1-4,0ZM60,20H4V13a3.009,3.009,0,0,1,3-3h5v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h8v2a4,4,0,0,0,8,0V10h5a3.009,3.009,0,0,1,3,3Z"/><path d="M30,29a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"/><path d="M18,29a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V29h4v3Z"/><path d="M52,34a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2Zm-4-5h4v3H48Z"/><path d="M30,38a2,2,0,0,0-2-2H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"/><path d="M18,38a2,2,0,0,0-2-2H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2Zm-6,3V38h4v3Z"/><path d="M28,45H24a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,28,45Zm-4,5V47h4v3Z"/><path d="M36,34h4a2,2,0,0,0,2-2V29a2,2,0,0,0-2-2H36a2,2,0,0,0-2,2v3A2,2,0,0,0,36,34Zm0-5h4v3H36Z"/><path d="M34,41a2,2,0,0,0,2,2,1,1,0,0,0,0-2V38h4a1,1,0,0,0,0-2H36a2,2,0,0,0-2,2Z"/><path d="M16,45H12a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h4a2,2,0,0,0,2-2V47A2,2,0,0,0,16,45Zm-4,5V47h4v3Z"/><path d="M49,36A13,13,0,1,0,62,49,13.015,13.015,0,0,0,49,36Zm0,24A11,11,0,1,1,60,49,11.013,11.013,0,0,1,49,60Z"/><path d="M54.778,44.808,47,52.586,43.465,49.05a1,1,0,0,0-1.414,1.414l4.242,4.243a1,1,0,0,0,1.414,0l8.485-8.485a1,1,0,0,0-1.414-1.414Z"/></g>
                </svg>

            <p className="text-center">
              Mardi - Jeudi - Vendredi <br></br>
              9h - 19h{" "}
            </p>
          </div>
          <p className="mt-5">Tarif pour une séance : 60€ TTC</p>
          <p className="">Paiement par chèque ou espèces</p>
          <hr className='text-gray-600 md:text-white w-1/3 mt-5 mr-5 ml-auto '/>
          <p className="mt-3">Prendre rendez-vous :</p>

          <div className="pl-2 pt-3 grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center justify-center gap-y-1">
            <div></div>
            <div className="group w-fit hover:translate-x-0.5 hover:scale-102 ease-in-out duration-100">
              <a
                href="https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues"
                className="sansation-bold text-cyan-400 text-xl"
                target="_blank"
              >
                Doctolib
              <svg
                  id="Layer_1"
                  className="md:fill-white fill-gray-600 h-9 w-15 inline -ml-3 -mr-3 transition-transform duration-1000 ease-out group-hover:translate-x-1"
                  enableBackground="new 0 0 100 100"
                  height="512"
                  viewBox="0 0 100 100"
                  width="500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m86.29 52h-51.69c-1.1 0-2-.9-2-2s.9-2 2-2h51.69c1.1 0 2 .9 2 2s-.9 2-2 2z" />
                  <path
                    clipRule="evenodd"
                    d="m16.45 48c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .89-2 2-2z"
                    fillRule="evenodd"
                  />
                  <circle
                    clipRule="evenodd"
                    cx="25.52"
                    cy="50"
                    fillRule="evenodd"
                    r="2"
                  />
                  <path d="m73 67.62c-.46 0-.92-.16-1.29-.48-.84-.72-.94-1.98-.23-2.82l12.18-14.32-12.18-14.33c-.72-.84-.61-2.1.23-2.82s2.1-.61 2.82.23l13.28 15.62c.63.75.63 1.84 0 2.59l-13.28 15.63c-.4.47-.96.7-1.53.7z" />
                </svg>
              </a>
              <hr className="w-fit border-t
              md:border-white
              border-gray-600
                -mt-1.5
                origin-left
                ease-in-out
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-full" />
                </div>

            <svg
	 viewBox="0 0 25.625 25.625"  xmlns="http://www.w3.org/2000/svg"
  xmlSpace="preserve" className="h-5 w-5 mt-2 md:fill-white fill-gray-600">
<g>
	<path d="M22.079,17.835c-1.548-1.324-3.119-2.126-4.648-0.804l-0.913,0.799
		c-0.668,0.58-1.91,3.29-6.712-2.234C5.005,10.079,7.862,9.22,8.531,8.645l0.918-0.8c1.521-1.325,0.947-2.993-0.15-4.71l-0.662-1.04
		C7.535,0.382,6.335-0.743,4.81,0.58L3.986,1.3C3.312,1.791,1.428,3.387,0.971,6.419c-0.55,3.638,1.185,7.804,5.16,12.375
		c3.97,4.573,7.857,6.87,11.539,6.83c3.06-0.033,4.908-1.675,5.486-2.272l0.827-0.721c1.521-1.322,0.576-2.668-0.973-3.995
		L22.079,17.835z"/>
</g>
</svg>
            <a href="tel:+336XXXXXXX" className="mb-0 mt-2">
              06.XX.XX.XX.XX
            </a>

            <svg className="h-5 w-5 md:fill-white fill-gray-600 mt-2" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m462.88 337.781c0 43.236-35.17 78.351-78.351 78.351h-257.057c-43.181 0-78.352-35.116-78.352-78.351v-163.562c0-14.43 3.951-27.983 10.809-39.615l125.428 125.428c18.765 18.82 43.894 29.19 70.67 29.19 26.721 0 51.85-10.37 70.615-29.19l125.428-125.428c6.859 11.632 10.809 25.184 10.809 39.615v163.562zm-78.352-241.913h-257.056c-17.832 0-34.293 6.035-47.461 16.076l126.69 126.745c13.114 13.058 30.616 20.301 49.326 20.301 18.655 0 36.158-7.243 49.271-20.301l126.69-126.745c-13.167-10.041-29.627-16.076-47.46-16.076zm0-30.232h-257.056c-59.861 0-108.584 48.723-108.584 108.584v163.562c0 59.916 48.723 108.584 108.584 108.584h257.056c59.861 0 108.584-48.668 108.584-108.584v-163.563c0-59.861-48.723-108.583-108.584-108.583z" fillRule="evenodd"/></svg>
            <a href="mailto:mailKevin@mailkevin.com" className="mb-0 mt-2">
              mailKevin@mailkevin.com
            </a>
          </div>
          <hr className='text-gray-600 md:text-white w-1/3 -ml-10 mt-4'/>

        </div>
        </div>
        </div>
        <div className="flex justify-end items-center sm:px-15 px-5 pb-20 z-90">
          <div
            id="maps"
            className="block md:mt-0 shadow-xl scroll-mt-40 z-50"
          >
            <iframe
              className="mx-auto rounded-lg hidden sm:block"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.531190821487!2d4.008853675934832!3d43.65792125212588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1765793904755!5m2!1sfr!2sfr"
              width="450"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="Plan de la localisation du cabinet"
            ></iframe>
          <iframe className="mx-auto rounded-lg max-w-[95%] sm:hidden" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5773.06279046728!2d4.011429!3d43.657917!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1769774006005!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        </div>
        </div>

      <div className="pt-40 md:pt-20 bg-emerald-300 h-200 sm:h-180 -mb-70">
      <div className="to-show animate-on-scroll">
        <div id="pour-qui" className="scroll-mt-30 flex flex-nowrap w-full pl-5 md:pl-25 mb-5 z-90  text-lg">
          <h2 className="relative rounded pl-5 pr-2 py-0.5 text-emerald-500 bg-emerald-100
          before:content-[''] before:absolute before:left-1.5 before:top-1/2
          before:-translate-y-1/2 before:w-2 before:h-2
          before:rounded-full before:bg-emerald-500
          ">Pour qui</h2>
          <a href="#infos-pratiques" className="group hover:scale-104">
            <h2 className="rounded-l px-3 py-1 text-emerald-500 hover:text-emerald-600 ml-5">↑ Informations pratiques</h2>
            <hr
              className="w-fit border-t
              border-emerald-500/80
                -mt-1.5
                mx-auto
                ml-10
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-[78%]"
            />
          </a>
        </div>
        <div className="sm:px-10 md:px-15 px-5 md:gap-x-10 mx-auto sm:grid grid-cols-[minmax(90px,3fr)_minmax(120px,4fr)] md:w-4/5 items-start justify-start mt-15">
          <Image
            src={`/images/IMG_2315.jpg`}
            alt="Image d'un caillou taillé"
            width="3024"
            height="3024"
            preload="true"
            className="object-center max-h-90 w-fit ml-0 mr-auto hidden sm:inline"
          />
          <div className="md:mt-5 sm:ml-10 text-emerald-700">
            <Image
            src={`/images/IMG_2315.jpg`}
            alt="Image d'un caillou taillé"
            width="3024"
            height="3024"
            preload="true"
            className="object-center max-h-90 mr-5 float-left w-1/2 sm:hidden"
          />
            <p>Je reçois les adolescents et les adultes.</p>
            <p>Selon vos besoins nous pourrons adapter le type de thérapie.
              Que vous veniez pour des problèmes du quotidien, des phobies, traumas, ou addictions, vous êtes bienvenu.e</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
