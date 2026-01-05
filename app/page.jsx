'use client';
import Carousel from "./_components/carousel";
import { useState } from "react";
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
  return (
    <div className="mt-0 w-full">
      <div id="section-1" className="w-full h-screen relative">
        <Carousel activeItemIndex={activeItemIndex} setActiveItemIndex={setActiveItemIndex} carouselData={carouselData}/>
      </div>

{/*
      <div style={{clipPath: 'polygon(0% 0%,2% 95%,98% 95%,100% 0%, 100% 100%, 0% 100%)'}} className="w-full
      h-20 bg-teal-300">
      </div> */}

    <div className="bg-gray-400 w-full px-10 py-10">
      <div className="w-4/5 mx-auto mt-10">
        <p className="text-white text-2xl font-light">Quelque chose vous bloque où ne passe pas?</p>
        <hr className="w-1/7 mt-5 text-gray-100" />
        <div className="flex flex-wrap mt-10 space-x-4">
          <div className="w-1/2">
            <p className="text-white text-xl font-light mt-10 w-4/5">
              Besoin de faire une pause, <br></br>
              De prendre du temps pour vous.
            </p>

            <p className="text-white text-xl font-light w-4/5 pt-10">
              Je vous propose de nous rencontrer afin de définir ensemble ce qui peut être amélioré et pourquoi pas un nouvel horizon.
            </p>
          </div>
          <Image
            src={`/images/IMG_6021.jpg`}
            alt="Images de paysages"
            width="4032"
            height="3024"
            preload="true"
            className="object-cover object-center md:w-1/2 -mr-10 ml-auto rounded shadow"
          />
        </div>
      </div>
    </div>

    <div className="flex w-4/5 mx-auto my-20 space-x-10 items-center">
      <Image
        src={`/images/IMG_3081.jpg`}
        alt="Image du cabinet"
        width="4032"
        height="3024"
        preload="true"
        className="object-cover object-center w-1/3  ml-0 rounded shadow"
      />
      <div className="w-2/3">
        <p className="text-gray-700 text-xl font-light line-clamp-3 text-justify">
          Diplômé de l'université Paul Valéry en 2016, j'ai commencé par travailler à
          la bergerie de Faucon avec des adolescents en difficultés. J'ai ensuite
          été médiateur en espace de rencontre pour l'association Adages
          lors des droits de visites entre parents et enfants de tout âge.
        </p>
        <div className="pt-2 w-fit mr-0 ml-auto hover:translate-x-0.5 hover:scale-102 ">
        <a href="/mon-parcours" className="text-gray-600 tracking-wide">En savoir plus
        <Image
        src={`/images/right-arrow_7.svg`}
        alt="fleche vers la droite"
        width="30"
        height="50"
        preload="true"
        className="object-center inline"
      /></a>
        <hr className="w-full text-gray-400 -mt-1.5"/>
        </div>
       </div>
    </div>

    <div className="w-full bg-gray-400 py-20">
      <div className="flex w-4/5 mx-auto space-x-10 items-center">
        <div className="w-2/3">
          <p className="text-white text-xl font-light line-clamp-3 text-justify">
            Les thérapies que je propose s'adressent aux adolescents et aux adultes. Les personnes souffrant
            de phobies, d'addictions ou de traumas profonds sont aussi les bienvenues, ensemble nous essaierons trouver
            des solutions.
          </p>
          <div className="pt-2 w-fit mr-0 ml-auto hover:translate-x-0.5 hover:scale-102 ">
          <a href="/pour-qui" className="text-white tracking-wide">En savoir plus
          <svg id="Layer_1" className="fill-white h-9 w-15 inline -ml-3 -mr-3" enableBackground="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="500" xmlns="http://www.w3.org/2000/svg"><path d="m86.29 52h-51.69c-1.1 0-2-.9-2-2s.9-2 2-2h51.69c1.1 0 2 .9 2 2s-.9 2-2 2z"/><path clipRule="evenodd" d="m16.45 48c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .89-2 2-2z" fillRule="evenodd"/><circle clipRule="evenodd" cx="25.52" cy="50" fillRule="evenodd" r="2"/><path d="m73 67.62c-.46 0-.92-.16-1.29-.48-.84-.72-.94-1.98-.23-2.82l12.18-14.32-12.18-14.33c-.72-.84-.61-2.1.23-2.82s2.1-.61 2.82.23l13.28 15.62c.63.75.63 1.84 0 2.59l-13.28 15.63c-.4.47-.96.7-1.53.7z"/></svg>
          </a>
          <hr className="w-full text-white -mt-1.5"/>
          </div>
        </div>
        <Image
          src={`/images/IMG_2315.jpg`}
          alt="Image d'un caillou taillé"
          width="4032"
          height="3024"
          preload="true"
          className="object-cover object-center w-1/3  ml-0 rounded shadow"
        />
      </div>
    </div>

    <div className="relative w-full background2 md:bg-fixed bg-size-[100%_auto] bg-center bg-no-repeat">
      <div className="w-16/25 mx-auto space-x-10 py-20">
        <h2 className="text-2xl text-gray-500">Thérapie EMDR</h2>
        <p className='text-xl text-gray-500 mt-5 mr-0 ml-auto line-clamp-3 '>La thérapie EMDR (pour <span className="font-normal italic">Eye movement desensitization and reprocessing</span>)
        aide à traiter les séquelles psychologiques liées à des évènements de vie perturbant. Elle est aussi indiquée
        dans le cas des phobies, des addictions ou encore des traumas. Des entretiens préliminaires nous permettront d'évaluer si
        l'EMDR est indiquée dans votre cas.
        </p>
         <div className="pt-2 w-fit mr-0 ml-auto hover:translate-x-0.5 hover:scale-102 ">
        <a href="/emdr" className="text-gray-500 tracking-wide">En savoir plus
        <svg id="Layer_1" className="fill-gray-500 h-9 w-15 inline -ml-3 -mr-3" enableBackground="new 0 0 100 100" height="512" viewBox="0 0 100 100" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m86.29 52h-51.69c-1.1 0-2-.9-2-2s.9-2 2-2h51.69c1.1 0 2 .9 2 2s-.9 2-2 2z"/><path clipRule="evenodd" d="m16.45 48c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .89-2 2-2z" fillRule="evenodd"/><circle clipRule="evenodd" cx="25.52" cy="50" fillRule="evenodd" r="2"/><path d="m73 67.62c-.46 0-.92-.16-1.29-.48-.84-.72-.94-1.98-.23-2.82l12.18-14.32-12.18-14.33c-.72-.84-.61-2.1.23-2.82s2.1-.61 2.82.23l13.28 15.62c.63.75.63 1.84 0 2.59l-13.28 15.63c-.4.47-.96.7-1.53.7z"/></svg>
         </a>
        <hr className="w-full text-gray-500 -mt-1.5"/>
        </div>

      </div>
    </div>

    <p className="text-5xl mt-25">Ajouter des éléments qui résument rapidement pour qui et emdr avec liens vers les pages</p>


    </div>
  );
}
