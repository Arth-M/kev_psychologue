import Image from "next/image";

export default function Consultations() {
  return (
    <div id="section-1" className="relative mt-20">
      <div className="w-fit absolute z-40 top-10 left-5 sm:top-12 sm:left-15 lg:left-35">
        <h1 className="text-3xl text-center rounded-r-lg py-2 md:pl-30 md:pr-4 px-4 text-slate-500 font-light tracking-wider">
          Consultations
        </h1>
        <hr className="w-25 text-slate-500 md:ml-30 ml-4" />
      </div>
      <div className="absolute top-0 md:h-160 h-160 w-full bg-sky-300/30 z-0"></div>
      <div className="absolute top-150 sm:top-200 lg:h-58 md:top-160 md:h-80 w-full bg-emerald-200/50"></div>
      <div className="absolute background-bureau top-70 md:top-70 lg:left-5 md:left-0 md:w-1/2 w-4/5 h-90 border border-gray-300"></div>
      <div className="absolute background-bureau-2 top-200 right-0 md:top-128 md:right-0 lg:left-130 md:w-1/2 w-4/5 h-90 border border-gray-200"></div>
      <div className="mt-35 relative">
        <div id="infos-pratiques" className="scroll-mt-30 flex flex-nowrap w-full pl-25 mb-5 z-90  text-lg">
          <h2 className="rounded-l border border-slate-400 px-3 py-1 text-slate-500">Informations pratiques</h2>
          <a href="#pour-qui">
            <h2 className="rounded-r border px-3 py-1 text-slate-300">Pour qui </h2>
          </a>
        </div>
      <div className="relative mb-51 sm:mb-51  lg:mb-54 px-5 flex flex-wrap items-center justify-around">
        <div className="border border-gray-300 min-w-sm px-10 py-5 rounded-2xl bg-white">
          <p className="mt-5">
            Sur rendez-vous uniquement <br />
          </p>
          <div className="grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center mt-5">
            <Image
              src={`/images/calendrier.svg`}
              alt="Image de paysage"
              width="40"
              height="40"
              preload="true"
              className="object-cover"
            />
            <p className="text-center">
              Mardi - Jeudi - Vendredi <br></br>
              9h - 19h{" "}
            </p>
          </div>
          <p className="mt-5">Tarif pour une séance : 60€ TTC</p>
          <p className="">Paiement par chèque ou espèces</p>
          <p className="mt-5">Prendre rendez-vous :</p>

          <div className="pl-2 grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center justify-center">
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
        </div>

          <div
            id="maps"
            className="hidden md:block md:mt-25 lg:mt-0 shadow-xl scroll-mt-40"
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

          <div
            id="maps"
            className="md:hidden mt-25 ml-5 sm:mt-25 sm:ml-35 shadow-xl scroll-mt-40"
          >
            <iframe
              className="rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.531190821487!2d4.008853675934832!3d43.65792125212588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1765793904755!5m2!1sfr!2sfr"
              width="350"
              height="300"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              alt="Plan de la localisation du cabinet"
            ></iframe>
          </div>
        </div>


      <div className="pt-20 bg-emerald-200/50">
        <div id="pour-qui" className="scroll-mt-30 flex flex-nowrap w-full pl-25 mb-5 z-90  text-lg">
          <a href="#infos-pratiques">
            <h2 className="rounded-l border px-3 py-1 text-slate-300">Informations pratiques</h2>
          </a>
          <h2 className="rounded-r border border-slate-400 px-3 py-1 text-slate-500">Pour qui</h2>
        </div>
        <div className="grid grid-cols-[minmax(90px,3fr)_minmax(120px,4fr)] w-4/5 items-start justify-start mt-15">
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
              Que vous veniez pour des problèmes du quotidien, des phobies, traumas, ou addictions, vous êtes les bienvenus.es</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
