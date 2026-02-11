import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="
          mt-15
          w-full
          lg:h-125
          lg:pt-15
          md:h-125
          md:pt-15
          sm:h-130
          h-140
          pt-8
          border-t-40/70 border-t-transparent
          border-b-5/70 border-b-gray-300/70
          border-l-100/70 border-l-gray-300/70
          border-r-100/70 border-r-gray-300/70
          relative z-30 bottom-0 bg-slate-200
          md:[clip-path:polygon(0%_40%,100%_0,100%_100%,0%_100%)]
          [clip-path:polygon(0%_20%,100%_0,100%_100%,0%_100%)]"
    >
      <div className="mx-auto w-full px-4 pt-10 pb-3">
        <div className="flex relative items-center justify-center mb-15">
        <div
          className="overflow-hidden w-45 h-35 fill-mako-900"
          id="phoenix-logo"
        >
          <span className="sr-only">Logo de Kevin Nicolas, Psychologue</span>

          <Image
            src="/images/phoenix-preview.png"
            alt="Image d'un caillou taillé"
            width={347}
            height={280}
            preload={true}
            className="object-cover object-bottom ml-0 rounded shadow"
          />
          <div className="absolute top-22 lg:left-[52%] sm:left-[54%] left-[55%] text-nowrap">
            <p className="text-xl">Kevin Nicolas</p>
            <p>Psychologue</p>
          </div>
        </div>
        </div>
        <p className="text-center mb-10">
          Thérapie EMDR, traitement des traumas, addictions, phobies.
        </p>
        <div className="mx-auto flex flex-wrap space-x-30 space-y-7 lg:max-w-2/3 md:max-w-2/3 w-full px-5 justify-center content-center">
          <div className="block w-fit mx-auto">
            <a href="tel:+33661734645" className="">
              <Image
                src="/images/phone.svg"
                alt="Images de téléphone"
                width={50}
                height={50}
                preload={false}
                className="h-5 w-5 inline mb-1 mr-1"
              />
              <p className="inline text-center">06.61.73.46.45</p>
            </a>
          </div>
          <div className="block w-fit mx-auto">
            <a href="/consultations#maps">
              <Image
                src="/images/pin.svg"
                alt="Images de localisation"
                width={50}
                height={50}
                preload={false}
                className="h-5 w-5 inline mb-1 mr-1"
              />
              <p className="inline text-nowrap">
                39 rue de Colombiers, 34670 Baillargues
              </p>
            </a>
          </div>
        </div>
        <div className="absolute bottom-5 right-9 justify-end mx-auto mt-7">
          <div className="w-fit">
            <p className="text-sm tracking-tighter">
              {" "}
              2026 - Tous droits réservés
            </p>
            <hr className="text-gray-300 w-full" />
            <p className="text-sm tracking-wide">
              Réalisé par
              <a href="http://www.atuweb.fr"> ATU-Web</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
