import Image from "next/image";

export default function InformationsPratiques() {
  return (
    <div id="section-1">
          <div className="absolute background-bureau top-60 md:top-60 md:left-5 md:w-1/2 w-full h-90 border border-gray-300"></div>
          <div className="absolute background-bureau-2 top-100 md:top-118 md:left-130 md:w-1/2 w-full h-90 border border-gray-200"></div>
      <div className="mt-35 mb-85 px-5 relative flex flex-wrap items-center justify-center md:space-x-25 space-x-10">
        <div className="border border-gray-300 min-w-sm px-10 py-5 rounded-2xl bg-white/85">
          <div className="grid grid-cols-[minmax(45px,1fr)_minmax(120px,5fr)] items-center mt-5">
            <Image
              src={`/images/calendrier.svg`}
              alt="Image de paysage"
              width="40"
              height="40"
              preload="true"
              className="object-cover"
            />
            <p className="text-center">Mardi - Jeudi - Vendredi <br></br>
            9h - 19h </p>

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
            target="_blank">
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
            <hr className="w-1/2 text-gray-200 -mt-1"/>
          </div>
            <Image
              src={`/images/phone.svg`}
              alt="Image de téléphone"
              width="20"
              height="20"
              preload="true"
              className="object-cover mb-0 mt-2"
            />
            <a
              href="tel:+336XXXXXXX"
              className="mb-0 mt-2"
            >
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
            <a
             href="mailto:mailKevin@mailkevin.com"
              className="mb-0 mt-2"
            >
              mailKevin@mailkevin.com
            </a>
          </div>
        </div>

        <div className="mt-25 ml-10 sm:mt-25 sm:ml-35 md:mt-0 md:ml-0 shadow-xl">
          <iframe id="#maps" className="mx-auto rounded-lg" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.531190821487!2d4.008853675934832!3d43.65792125212588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1765793904755!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt="Plan de la localisation du cabinet"></iframe>
        </div>
      </div>
    </div>
  )
}
