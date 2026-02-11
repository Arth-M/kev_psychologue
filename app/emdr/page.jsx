'use client'
import Image from "next/image";
import { useEffect } from "react";

export default function Emdr() {
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
    <div>
      <div className="w-full bg-gray-400 relative mt-20 pb-30" >

        <div className="relative z-0">
          <div className="w-fit absolute z-40 top-25 left-5 sm:top-23 sm:left-15 lg:left-35 to-show animate-on-scroll">
            <h1 className="text-3xl text-center rounded-r-lg py-2 md:pl-30 md:pr-4 px-4 text-white font-light tracking-wider lg:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" >Thérapie EMDR</h1>
            <hr className="w-25 text-gray-50 md:ml-33 ml-4"/>
          </div>

          <Image
              src="/images/IMG_6349.jpg"
              alt="Image de paysage marin"
              width={3024}
              height={4032}
              preload={true}
              className="object-cover object-[0%_42%] h-40 z-10"
            />
        </div>

        <div className="pt-15 w-4/5 mx-auto to-show animate-on-scroll">

            <p className="text-justify text-white font-light text-lg">
              La thérapie EMDR a pour but de traiter les troubles de stress post traumatique.
              Nous avons tous vécu un ou plusieurs évènements de stress intense ou d’effroi,
               face auxquels nous nous sommes sentis impuissants.
            </p>
            <p className="text-justify text-white font-light text-lg mt-1">
              Lorsqu’un traumatisme survient le cerveau n’arrive pas à traiter l’évènement dans tous ses aspects,
              il reste fragmenté dans la mémoire et susceptible d’être réactivé par n’importe quel fragment rencontré au quotidien.
              L’évènement est à l’origine des troubles qui s’en suivent.
            </p>


            <p className="font-light text-lg tracking-wide text-white mt-10">
              COMMENT CELA SE MANIFESTE ?
            </p>
            <p className="text-justify text-white font-light text-lg mt-1">
              <Image
                src="/images/IMG_6091.jpg"
                alt="Image de vitre glacée"
                width={3024}
                height={4032}
                preload={true}
                className="object-cover object-[0%_40%] lg:w-1/3 md:w-2/5 sm:w-2/5 w-1/2 float-right ml-10 z-10"
              />
              Des images, des pensées, des cauchemars qui s’imposent au patient de manière répétitive,
              involontaire et douloureuse.
            </p>
            <p className="text-justify text-white font-light text-lg mt-1">
              Parfois des flashbacks soudains replongent la personne dans le passé,
              lui faisant revivre la scène comme s'il y était encore et peuvent entrainer un état d’angoisse,
              de stress permanent.
            </p>
            <p className="text-justify text-white font-light text-lg mt-1">
              Les pensées, les discussions, les personnes, les lieux rappelant l’évènement traumatique
              peuvent être systématiquement évités. Ce qui restreint considérablement la vie sociale, familiale,
              et professionnelle.
            </p>
            <p className="text-justify text-white font-light text-lg mt-1">
              La tristesse, le manque de goût et d’élan vital, l’indifférence affective et émotionnelle sont souvent associés.
              L’état de stress post-traumatique entraîne un état d’hypervigilance, des réactions de sursaut, de l’irritabilité, des difficultés de concentration, des troubles du sommeil.
              Tous ces troubles peuvent affecter et altérer sévèrement la qualité de vie au quotidien de la personne et de ses proches.
            </p>

        </div>
      </div>


        <hr className="w-full mx-auto h-1 text-white"/>




        {/* <div className="absolute w-fit -top-14 right-0 bg-slate-400 rounded-tl-lg border-t border-l border-white">
          <h1 className="text-2xl text-center rounded-tl-lg pt-3 md:pr-33 md:pl-4 px-4 text-white font-light tracking-wider" >Comment se passe un traitement EMDR?</h1>
          <hr className="w-45 text-gray-50 md:mr-33 ml-auto mt-3"/>
        </div> */}


      <div className="text-gray-600 sm:text-gray-500 relative w-full h-570 sm:h-420 md:h-470 lg:h-370 -mb-90 pt-10 bg-[url(/images/help.jpg)] bg-[rgba(255,249,249,0.92)] sm:bg-[rgba(255,249,249,0.8)] bg-blend-overlay bg-size-[auto_auto] sm:bg-fixed sm:bg-size-[100%_auto] bg-center bg-no-repeat">


        <div className="w-4/5 mx-auto mb-15 to-show animate-on-scroll">
          <h1 className="text-2xl text-end rounded-tl-lg pt-3  font-light tracking-wider" >Comment se passe un traitement EMDR?</h1>
          <hr className="w-25 text-gray-500 sm:text-gray-400 mr-0 ml-auto"/>
        </div>

        <div className=" flex flex-wrap px-7 md:px-0 md:w-4/5 mx-auto place-content-around">
          <div className=" lg:w-1/3 md:w-2/5 sm:w-4/5 w-full rounded-4xl border-l-4 border-gray-200 sm:border-gray-50 px-5 py-3 self-start to-show animate-on-scroll">
            <h2 className="text-justify  font-light text-xl mt-1">
            Préparation
            </h2>
            <p className="text-justify  font-light text-lg mt-1">
            La préparation au traitement est indispensable, les entretiens préliminaires permettent de construire une relation thérapeutique de confiance,
            de valider l’indication de la thérapie EMDR et de définir l’objectif de la thérapie,
            et d'apprendre la pratique de moyens de stabilisation émotionnelle qui peuvent être utilisés en cours de séance et pratiqués a domicile entre les séances.
            </p>
          </div>

          <div className="md:mt-40 mt-15 lg:w-1/3 md:w-2/5 sm:w-4/5 w-full rounded-4xl border-l-4 border-gray-200 sm:border-gray-50 px-5 py-3 self-start to-show animate-on-scroll">
            <h2 className="text-justify  font-light text-xl mt-1">
            Séances de traitement
            </h2>
            <p className="text-justify  font-light text-lg mt-1">
            Lorsque la personne est prête, le traitement à proprement parler peut commencer.
            Suivant là où en sont les problématiques du patient cela peut prendre un certain temps.
            Les souvenirs perturbants à l’origine de la problématique du patient sont alors retraités l’un après l’autre.
            Un souvenir peut nécessiter plusieurs séances.
            Le patient est invité à se concentrer sur le souvenir traumatisant et toute ses composantes :
            sensations, émotions, pensées négatives sur lui. Ensuite le patient suit le mouvement des doigts du
            thérapeute en laissant venir ses pensées.
            D’autres stimulations bilatérales comme les sons ou les tapotements peuvent être utilisées.
            </p>
          </div>

          <div className="lg:mt-80 mt-15 mb-10 lg:w-1/3 sm:w-4/5 w-full rounded-4xl border-l-4 border-gray-200 sm:border-gray-50 px-5 py-3 self-start to-show animate-on-scroll">
            <h2 className="text-justify  font-light text-xl mt-1">
            Que se passe-t-il ?
            </h2>
            <p className="text-justify  font-light text-lg mt-1">
            C’est un processus de libre association des idées, sensations, émotions, pensées qui
            se déroule alors, de la même manière que lorsque nous rêvons la nuit.
            Entre chaque série de stimulations, le patient dit ce qui lui vient spontanément à l’esprit.
            Nous effectuons des séries de stimulations jusqu’à ce que le souvenir ne génère plus de
            perturbation chez le patient.
            Le retraitement de ce souvenir se termine par l’installation d’une pensée positive que
            de bonnes sensations corporelles confirment.

            Une séance d’EMDR dure autour de 60 minutes.
            </p>
          </div>

        </div>
        <p className="text-gray-400 opacity-60 text-xs text-end pr-3">
          @Photo de <a href="https://unsplash.com/fr/@youssefnaddam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">youssef naddam</a> sur <a href="https://unsplash.com/fr/photos/two-persons-arms-iJ2IG8ckCpA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>


      </div>
    </div>
  )
}
