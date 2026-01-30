"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Carousel({
  activeItemIndex,
  setActiveItemIndex,
  carouselData,
}) {
  let previousImage = 0;
  let nextImage = 0;

  previousImage =
    activeItemIndex === 0 ? carouselData.length - 1 : activeItemIndex - 1;

  nextImage =
    activeItemIndex === carouselData.length - 1 ? 0 : activeItemIndex + 1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveItemIndex(
        activeItemIndex === carouselData.length - 1 ? 0 : activeItemIndex + 1
      );
    }, 3500);

    return () => clearTimeout(timer);
  }, [activeItemIndex, carouselData.length, setActiveItemIndex]);

  return (
    <div id='hero' className="relative w-full bg-transparent h-full">
      <div className="z-10 w-full h-full flex flex-col items-center justify-center mx-auto absolute mt-10 md:mt-0">
        <h1 className="pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-5xl tracking-wide text-center text-mantis-50 sansation-regular">
          Kevin Nicolas
        </h1>
        <h2 className="pb-2 pt-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-4xl tracking-wide text-center text-mantis-50 sansation-regular">Psychologue</h2>
        <hr className="w-20 text-mantis-50 my-7"/>
        <h2 className="pb-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-4xl tracking-wide text-center text-mantis-50 sansation-regular">Psychothérapies</h2>
        <h2 className="mt-3 pb-2 px-5 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-3xl tracking-wide text-center text-mantis-50 sansation-regular">Thérapie EMDR <br/>Traitement des traumas, addictions, phobies</h2>
      </div>

      <div className="w-full h-full relative">
        <Image
          src={`/images/${carouselData[activeItemIndex].image}`}
          alt="Images de paysages"
          width={1500}
          height={1500}
          preload={true}
          className="object-cover z-0 object-center w-full h-full"
        />
      </div>
    </div>
  );
}
