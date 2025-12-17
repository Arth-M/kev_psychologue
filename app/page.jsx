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
        <div className="flex mt-10 space-x-4">
        <div className="w-full">
          <p className="text-white text-xl font-light mt-10 w-4/5">
            Besoin de faire une pause, <br></br>
            De prendre du temps pour vous.
          </p>

      <p className="text-white text-xl font-light w-4/5 pt-10">
        Je vous propose de nous rencontrer afin de définir ensemble ce qui peut être amélioré et pourquoi pas un nouvel horizon.
      </p>
      </div>
          <Image
            src={`/images/IMG_6063.jpg`}
            alt="Images de paysages"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-center w-1/3  mr-0 ml-auto rounded shadow"
          />
        </div>
      </div>
    </div>

    <div className="flex w-4/5 mx-auto mt-20 space-x-10 items-center">
      <Image
        src={`/images/IMG_3081.jpg`}
        alt="Image du cabinet"
        width="4032"
        height="3024"
        preload="true"
        className="object-cover object-center w-1/3  ml-0 rounded shadow"
      />
      <div className="w-2/3">
        <p className="text-gray-700 text-xl font-light line-clamp-3">
          Diplômé de l'université Paul Valéry en 2016, j'ai commencé par travailler à
          la bergerie de Faucon avec des adolescents en difficultés. J'ai ensuite
          été médiateur en espace de rencontre pour l'association Adages
          lors des droits de visites entre parents et enfants de tout âge.
        </p>
        <div className="pt-2 w-fit mr-0 ml-auto hover:translate-x-0.5 hover:scale-102 ">
        <a href="/mon-parcours" className="text-gray-600 tracking-wide">En savoir plus
        <Image
        src={`/images/right-arrow_7.svg`}
        alt="Image du cabinet"
        width="30"
        height="50"
        preload="true"
        className="object-center inline"
      /></a>
        <hr className="w-full text-gray-400 -mt-1.5"/>
        </div>
       </div>


    </div>

    <p className="text-5xl mt-25">Ajouter des éléments qui résument rapidement pour qui et emdr avec liens vers les pages</p>


    </div>
  );
}
