'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function MonParcours() {
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
    <div className="relative">
      <div className="w-full bg-gray-400 mt-20 pb-8" >

        <div className="relative z-0 ">
          <div className="w-fit absolute z-40 top-25 left-5 sm:top-23 sm:left-15 lg:left-35 to-show animate-on-scroll">
            <h1 className="text-3xl text-center rounded-r-lg py-2 md:pl-30 md:pr-4 px-4 text-white font-light tracking-wider " >Mon parcours</h1>
            <hr className="w-25 text-gray-50 md:ml-30 ml-4"/>
          </div>

          <Image
              src="/images/IMG_2465.jpg"
              alt="Image de paysage"
              width={3024}
              height={4032}
              preload={true}
              className="object-cover object-[0%_45%] h-40 z-10"
            />

        </div>
      <div className="px-7 md:px-0 md:w-4/5 mx-auto pt-15 pb-10 to-show animate-on-scroll" >
        <p className="text-white text-lg font-light">
          J’ai été diplômé à l’université de Lettres Paul VALERY de Montpellier en 2016.
        </p>
        <div className="flex flex-wrap mt-10 space-x-10 items-center w-full">




          <p className="text-white text-lg w-full text-justify font-light">
            <span className="inline-block float-left w-1/2 mr-7 relative">
            <Image
              src="/images/etudes.jpg"
              alt="Image d'étude"
              width={5184}
              height={3456}
              preload={true}
              className="object-cover object-center w-full float-left rounded"
            />
            <a className="absolute text-nowrap text-xs text-end text-gray-800 opacity-60 bottom-0 right-0" href="https://unsplash.com/fr/@uns__nstudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Photo de Unseen Studio sur Unsplash</a>

            </span>
            J’ai suivi le parcours : Phénoménologie clinique du sportif et des problématiques corporelles
            Pour le Master 1, j’ai écrit et soutenu le mémoire :
            « Contiens moi, j’ai besoin de liberté »
            Recherche sur le processus de subjectivation à l’adolescence à travers l’analyse du phénomène de contenance institutionnelle pouvant permettre au sujet une amorce de contenance psychique.
            Pour le master 2, j’ai écrit et soutenu le mémoire :
            « Se rencontrer et devenir »
            Les médiations corporelles comme chemin de Nostrité et de réalisation de soi.
          </p>

        </div>
        </div>
        </div>

        <div className="w-60 flex bg-gray-400 mx-auto -rotate-4">
        <hr className="w-1 mx-auto h-2 text-gray-400"/>
        </div>
        {/* <div className="w-full flex bg-gray-400 mx-auto px-20 -rotate-4 z-40">
        <hr className="w-0.5 text-gray-50 mr-[12%]"/>
        <hr className="w-0.5 text-gray-50 mr-[10%]"/>
        <hr className="w-0.5 text-gray-50 mr-[7%]"/>
        <hr className="w-0.5 text-gray-50 mr-[5%]"/>
        <hr className="w-0.5 text-gray-50 mr-[4%]"/>
        <hr className="w-0.5 text-gray-50 mr-[3%]"/>
        <hr className="w-[18%] text-gray-50"/>
        <hr className="w-0.5 text-gray-50 ml-[3%]"/>
        <hr className="w-0.5 text-gray-50 ml-[4%]"/>
        <hr className="w-0.5 text-gray-50 ml-[5%]"/>
        <hr className="w-0.5 text-gray-50 ml-[7%]"/>
        <hr className="w-0.5 h-2 text-gray-50 ml-[10%]"/>
        <hr className="w-0.5 h-0.5 text-gray-50 ml-[12%]"/>
        </div> */}

        <div className="w-full bg-gray-400 relative -mt-0.5 isolate h-370 sm:h-290 md:h-230 lg:h-190 -mb-70" >
        <div className="w-4/5 mx-auto pt-10 pb-10 to-show animate-on-scroll" >
         {/* <div className="flex mt-6 space-x-10 items-center w-full"> */}
          <div className="text-wrap">
          <Image
            src="/images/IMG_6305.jpg"
            alt="Image de paysage"
            width={3024}
            height={4032}
            preload={true}
            className="object-cover object-center w-1/2 sm:w-4/7 md:w-3/7 lg:w-2/7 float-right ml-10"
          />
          <p className="text-white text-lg mt-2 text-justify font-light ">
            À l’obtention du diplôme, j’ai tout de suite été engagé à la bergerie de Faucon.
            Cette institution était mon lieu de stage en Master 2.
          </p>

          <p className="text-white text-lg mt-2 text-justify font-light ">
            Il s’agit d’un lieu de vie pour adolescents en difficulté, suivis par l’aide sociale à l’enfance ou la protection judiciaire de la jeunesse. Ce lieu de vie se situe dans les gorges du Verdon et a la spécificité de se trouver en
            pleine nature et de centrer son travail sur la zoo-pédagogie.
          </p>

          <p className="text-white text-lg mt-2 text-justify font-light ">
            Pendant 3 années j’ai partagé le quotidien des adolescents, de l’équipe pluridisciplinaire
            et des nombreux animaux présents sur le site.
          </p>
          <p className="text-white text-lg mt-2 text-justify font-light">
            En 2019 j’ai intégré le service «  Parenthèse » , Institution de l’association ADAGES.
            J’ai occupé le poste d’intervenant en espace de rencontres.
          </p>

          <p className="text-white text-lg mt-2 text-justify font-light">
            Il s’agissait de médiatiser les droits de visite entre parents et enfants (de 1 à 17 ans).
            Ces droits de visite étaient dispensés par le juge aux affaires familiales.
            Les familles venaient de tous horizons et rencontraient des problématiques variées.
          </p>
          <p className="text-white text-lg mt-2 text-justify font-light">
            J’ai occupé ce poste jusqu’en 2023, aujourd’hui je commence une nouvelle aventure
            en m’installant en tant que psychologue libéral.
          </p>
          </div>


        {/* </div> */}
      </div>



    </div>
    </div>
  )
}
