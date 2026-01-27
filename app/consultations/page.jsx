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
    <div id="section-1" className="p-0 m-0 ">
      <div className="bg-gray-400">
      <div className="relative mt-20 to-show animate-on-scroll">
      <div className="w-fit absolute z-40 top-10 left-5 sm:top-12 sm:left-15 lg:left-35 to-show animate-on-scroll">
        <h1 className="text-3xl text-center rounded-r-lg py-2 md:pl-30 md:pr-4 px-4 text-white font-light tracking-wider">
          Consultations
        </h1>
        <hr className="w-25 text-white md:ml-30 ml-4" />
      </div>
      <div className="absolute background-bureau top-70 md:top-65 lg:right-5 md:right-0 md:w-1/2 w-4/5 h-90 to-show animate-on-scroll"></div>
      <div className="absolute background-bureau-2 top-200 right-0 md:top-147 md:left-0 lg:left-5 md:w-1/2 w-4/5 h-90 to-show animate-on-scroll"></div>
      <div className="pt-35 relative to-show animate-on-scroll">
        <div id="infos-pratiques" className="scroll-mt-30 flex flex-nowrap w-full pl-25 mb-5 z-90 text-lg to-show">
          <h2 className="rounded-l px-3 py-1 text-white">Informations pratiques</h2>
          {/* <span className="px-3 py-1 text-gray-300">-</span> */}
          <a href="#pour-qui" className="group hover:scale-104">
            <h2 className="rounded-r px-3 py-1 text-gray-300 group-hover:text-gray-200">Pour qui </h2>
            <hr
              className="w-fit border-t
              border-gray-200
                -mt-1.5
                mx-auto
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-[75%]"
            />
          </a>
        </div>
      <div className="relative mb-20 sm:mb-15 sm:px-25 px-5 flex items-center justify-start">
        <div className="min-w-sm px-10 py-5 rounded-2xl text-white">
          <hr className='text-white w-1/3 -ml-10 '/>
          <div className="w-fit">
          <p className="mt-5">
            Sur rendez-vous uniquement <br />
          </p>
          <hr className='text-gray-200/50 w-full'/>
          </div>
          <div className="grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center mt-5">
            <svg viewBox="0 0 64 64"
            width="512" height="512"
            className="w-10 h-10 fill-white">
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
          <hr className='text-white w-1/3 mt-5 mr-0 ml-auto '/>
          <p className="mt-3">Prendre rendez-vous :</p>

          <div className="pl-2 pt-3 grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center justify-center gap-y-1">
            <div></div>
            <div className="w-fit hover:translate-x-0.5 hover:scale-102 ease-in-out duration-100">
              <a
                href="https://www.doctolib.fr/psychologue/baillargues/kevin-nicolas-baillargues"
                className="sansation-bold text-cyan-400 text-xl"
                target="_blank"
              >
                Doctolib
                <Image
                  src={`/images/right-arrow_7.svg`}
                  alt="fleche vers la droite"
                  width="30"
                  height="50"
                  preload="true"
                  className="object-center inline"
                />
              </a>
              <hr className="w-1/2 text-gray-200 -mt-1" />
            </div>
            <Image
              src={`/images/phone.svg`}
              alt="Image de téléphone"
              width="20"
              height="20"
              preload="true"
              className="object-cover mb-0 mt-2"
            />
            <a href="tel:+336XXXXXXX" className="mb-0 mt-2">
              06.XX.XX.XX.XX
            </a>

            <Image
              src={`/images/mail5.svg`}
              alt="Image de mail"
              width="20"
              height="20"
              preload="true"
              className="object-cover mb-0 mt-2"
            />
            <a href="mailto:mailKevin@mailkevin.com" className="mb-0 mt-2">
              mailKevin@mailkevin.com
            </a>
          </div>
          <hr className='text-white w-1/3 -ml-10 mt-4'/>

        </div>
        </div>
        </div>
        <div className="flex justify-end items-center sm:px-25 px-5 pb-20 z-90">
          <div
            id="maps"
            className="hidden md:block md:mt-25 lg:mt-0 shadow-xl scroll-mt-40 z-50"
          >
            <iframe
              className="mx-auto rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.531190821487!2d4.008853675934832!3d43.65792125212588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1765793904755!5m2!1sfr!2sfr"
              width="450"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="Plan de la localisation du cabinet"
            ></iframe>
          </div>
        </div>
        </div>
        </div>

      <div className="pt-20 bg-emerald-200/50 h-180 -mb-70">
      <div className="to-show animate-on-scroll">
        <div id="pour-qui" className="scroll-mt-30 flex flex-nowrap w-full pl-25 mb-5 z-90  text-lg">
          <a href="#infos-pratiques" className="group hover:scale-104">
            <h2 className="rounded-l px-3 py-1 text-slate-300 hover:text-slate-400/90">Informations pratiques</h2>
            <hr
              className="w-fit border-t
              border-slate-400/90
                -mt-1.5
                mx-auto
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-[82%]"
            />
          </a>
            {/* <span className="px-3 py-1 text-slate-300">-</span> */}
          <h2 className="rounded-r px-3 py-1 text-slate-500">Pour qui</h2>
        </div>
        <div className="sm:px-10 md:px-15 px-5 gap-x-10 grid grid-cols-[minmax(90px,3fr)_minmax(120px,4fr)] w-4/5 items-start justify-start mt-15">
          <Image
            src={`/images/IMG_2315.jpg`}
            alt="Image d'un caillou taillé"
            width="3024"
            height="3024"
            preload="true"
            className="object-center inline max-h-90 w-fit ml-0 mr-auto"
          />
          <div className="mt-5">
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
