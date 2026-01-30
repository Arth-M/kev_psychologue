"use client";
import Carousel from "./_components/carousel";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const carouselData = [
    {
      image: "IMG_2436.jpg",
    },
    {
      image: "IMG_2870.jpg",
    },
    {
      image: "IMG_5995.jpg",
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useEffect(() => {
    const contentToShow = document.querySelectorAll(".to-show");
    // const image=document.querySelector("#image1")
    // console.log(image.getBoundingClientRect())
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.2,
        rootMargin: "-25px",
      },
    );

    contentToShow.forEach((content) => {
      observer.observe(content);
    });
  }, []);

  return (
    <div className="mt-0 w-full">
      <div id="section-1" className="w-full h-screen relative">
        <Carousel
          activeItemIndex={activeItemIndex}
          setActiveItemIndex={setActiveItemIndex}
          carouselData={carouselData}
        />
      </div>

      {/*
      <div style={{clipPath: 'polygon(0% 0%,2% 95%,98% 95%,100% 0%, 100% 100%, 0% 100%)'}} className="w-full
      h-20 bg-teal-300">
      </div> */}

      <div className="bg-gray-400 w-full px-10 py-20">
        <div className="w-4/5 mx-auto to-show animate-on-scroll">
          <p className=" text-white text-2xl font-light">
            Quelque chose vous bloque où ne passe pas?
          </p>
          <hr className=" w-1/7 mt-5 text-gray-100" />
          <div className="md:flex md:flex-wrap mt-10">
            <div className="md:w-1/2">
              <p className=" text-white text-xl font-light mt-10 md:w-4/5 mb-8 md:mb-0">
                Besoin de faire une pause, <br></br>
                De prendre du temps pour vous.
              </p>

              <div className="group md:hidden relative inline-block mx-auto sm:w-2/3 w-full">
              <Image
                id="image1"
                src={`/images/IMG_6021.jpg`}
                alt="Images de paysages"
                width="4032"
                height="3024"
                preload="true"
                className="z-50 object-cover object-center w-full ml-auto rounded shadow relative group-hover:-rotate-2 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gray-500/50 -z-10 rounded -rotate-2 scale-102 "></div>
            </div>

              <p className=" text-white text-xl font-light md:w-4/5 md:pt-10 mt-8 md:mt-0">
                Je vous propose de nous rencontrer afin de définir ensemble ce
                qui peut être amélioré et pourquoi pas un nouvel horizon.
              </p>
            </div>
            <div className="group hidden md:inline-block -mr-10 ml-auto w-1/2 self-center">
            <div className="group relative inline-block my-auto">
              <Image
                id="image1"
                src={`/images/IMG_6021.jpg`}
                alt="Images de paysages"
                width="4032"
                height="3024"
                preload="true"
                className="z-50 object-cover object-center md:w-full ml-auto rounded shadow relative group-hover:-rotate-2 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gray-500/50 -z-10 rounded -rotate-2 scale-102 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex px-7 md:px-0 md:w-4/5 mx-auto my-20 md:space-x-10 space-x-4 items-center to-show animate-on-scroll">
        <Image
          src={`/images/IMG_3081.jpg`}
          alt="Image du cabinet"
          width="4032"
          height="3024"
          preload="true"
          className="object-cover object-center md:w-1/3 w-2/5  ml-0 rounded shadow"
        />
        <div className="md:w-2/3 w-3/5">
          <p className="text-gray-700 text-xl font-light line-clamp-3 text-justify">
            Diplômé de l'université Paul Valéry en 2016, j'ai commencé par
            travailler à la bergerie de Faucon avec des adolescents en
            difficultés. J'ai ensuite été médiateur en espace de rencontre pour
            l'association Adages lors des droits de visites entre parents et
            enfants de tout âge.
          </p>
          <div className="group pt-2 w-fit h-auto mr-0 ml-auto hover:translate-x-0.5">
            <a href="/mon-parcours" className="text-gray-600 tracking-wide">
              En savoir plus
              <Image
                src={`/images/right-arrow_7.svg`}
                alt="fleche vers la droite"
                width="30"
                height="50"
                preload="true"
                className="object-center inline transition-transform duration-1000 ease-out group-hover:translate-x-1"
              />
            </a>
            <hr
              className="w-[97%] border-t
              border-gray-400
                -mt-1.5
                origin-left
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-full"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-400 py-20">
        <div className="flex px-7 md:px-0 md:w-4/5 mx-auto space-x-10 items-center to-show animate-on-scroll">
          <div className="md:w-2/3 w-3/5">
            <p className="text-white text-xl font-light line-clamp-3 text-justify">
              Les consultations se déroulent dans mon cabinet situé à
              Baillargues. Les thérapies que je propose s'adressent aux
              adolescents et aux adultes. Les personnes souffrant de phobies,
              d'addictions ou de traumas profonds sont aussi les bienvenues,
              ensemble nous essaierons trouver des solutions.
            </p>
            <div className="group pt-2 w-fit mr-0 ml-auto hover:translate-x-0.5">
              <a href="/consultations" className="text-white tracking-wide">
                En savoir plus
                <svg
                  id="Layer_1"
                  className="fill-white h-9 w-15 inline -ml-3 -mr-3 transition-transform duration-1000 ease-out group-hover:translate-x-1"
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
              <hr className="w-[97%] border-t
              border-white
                -mt-1.5
                origin-left
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-full" />
            </div>
          </div>
          <Image
            src={`/images/IMG_2315.jpg`}
            alt="Image d'un caillou taillé"
            width="4032"
            height="3024"
            preload="true"
            className="object-cover object-center md:w-1/3 w-2/5  ml-0 rounded shadow"
          />
        </div>
      </div>

      <div className="relative w-full background2 bg-cover md:bg-fixed md:bg-size-[100%_auto] bg-center bg-no-repeat h-150 -mb-75">
        <div className="md:w-16/25 px-7 md:px-0 mx-auto space-x-10 py-20 to-show animate-on-scroll">
          <h2 className="text-2xl text-gray-500">Thérapie EMDR</h2>
          <p className="text-xl text-gray-500 mt-5 mr-0 ml-auto line-clamp-3 ">
            La thérapie EMDR (pour
            <span className="font-normal italic">
              Eye movement desensitization and reprocessing
            </span>
            ) aide à traiter les séquelles psychologiques liées à des évènements
            de vie perturbant. Elle est aussi indiquée dans le cas des phobies,
            des addictions ou encore des traumas. Des entretiens préliminaires
            nous permettront d'évaluer si l'EMDR est indiquée dans votre cas.
          </p>
          <div className="group pt-2 w-fit h-auto mr-0 ml-auto hover:translate-x-0.5">
            <a href="/emdr" className="text-gray-600 tracking-wide">
              En savoir plus
              <Image
                src={`/images/right-arrow_7.svg`}
                alt="fleche vers la droite"
                width="30"
                height="50"
                preload="true"
                className="object-center inline transition-transform duration-1000 ease-out group-hover:translate-x-1"
              />
            </a>
            <hr
              className="w-[97%] border-t
              border-gray-400
                -mt-1.5
                origin-left
                group-hover:animate-[hr-fill_0.8s_cubic-bezier(0.4,0,0.2,1)_forwards]
                group-hover:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
