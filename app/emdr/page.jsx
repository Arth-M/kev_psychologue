import Image from "next/image";

export default function Emdr() {
  return (
    <div id="section-1">
      <div className="w-full bg-gray-400 relative mt-22 pb-30" >

        <div className="relative z-0 ">
          <div className="w-fit absolute z-40 top-27">
            <h1 className="text-3xl text-center rounded-r-lg py-3 md:pl-33 md:pr-4 px-4 bg-gray-400 text-white font-light tracking-wider" >Thérapie EMDR</h1>
            <hr className="w-25 text-gray-50 md:ml-33 ml-4"/>
          </div>

          <Image
              src={`/images/IMG_6349.jpg`}
              alt="Image d'étude"
              width="3024"
              height="4032"
              preload="true"
              className="object-cover object-[0%_42%] h-40 z-10"
            />
        </div>

        <div className="pt-15 w-4/5 mx-auto flex space-x-10">
          <div className="w-2/3">
            <p className="text-justify text-white font-light text-lg">
              La thérapie EMDR a pour but de traiter les troubles de stress post traumatique.
              Nous avons tous vécu un où plusieurs évènements de stress intense ou d’effrois, face auxquels nous nous sommes sentie impuissant.
              Lorsqu’un traumatisme survient le cerveau n’arrive pas à traiter l’évènement dans tous ses aspects, Il reste fragmenté dans la mémoire et susceptible d’être réactivé par n’importe quel fragment rencontré au quotidien.
              L’évènement est à l’origine des troubles qui s’en suivent.
            </p>
            <p className="font-light text-lg tracking-wide mt-3 text-white">COMMENT CELA SE MANIFESTE ?</p>

            <p className="text-justify text-white font-light text-lg mt-1">
              Des images, des pensées, des cauchemars qui s’imposent au patient de manière répétitive, involontaire et douloureuse.
              Parfois des flashback soudain replonge la personne dans le passé, lui faisant revivre la scène comme si il y’était encore et peut entrainer un état d’angoisse, de stress permanent.
              Les pensées, les discussions, les personnes, les lieux rappelant l’évènement traumatique peuvent être systématiquement évité. Ce qui restreint considérablement la vie sociale, familiale, professionnel
              La tristesse, le manque de goût et  d’élan vital, l’indifférence affective et émotionnelle sont souvent associé.
              L’état de stress post entraine un état d’hypervigilance, des réactions de sursaut, de l’irritabilité, des difficultés de concentration, des troubles du sommeil…
              Tous ces troubles peuvent affecter et altérer sévèrement la qualité de vie au quotidien de la personne et de ses proches.
            </p>
          </div>
          <Image
            src={`/images/IMG_6091.jpg`}
            alt="Image de vitre glacée"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-[0%_40%] w-1/3 inn z-10"
          />
        </div>
      </div>

      <div className="w-20 flex bg-slate-400 mx-auto rotate-8">
        <hr className="w-1 mx-auto h-1 text-slate-400"/>
      </div>



        {/* <div className="absolute w-fit -top-14 right-0 bg-slate-400 rounded-tl-lg border-t border-l border-white">
          <h1 className="text-2xl text-center rounded-tl-lg pt-3 md:pr-33 md:pl-4 px-4 text-white font-light tracking-wider" >Comment se passe un traitement EMDR?</h1>
          <hr className="w-45 text-gray-50 md:mr-33 ml-auto mt-3"/>
        </div> */}


        <div className="relative w-full pt-10 bg-[url(/images/help.jpg)] md:bg-fixed h-120 bg-size-[100%_auto] bg-center bg-origin-border bg-no-repeat">

          <p className="text-slate-500 opacity-60 text-xs text-end">
            @Photo de <a href="https://unsplash.com/fr/@youssefnaddam?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">youssef naddam</a> sur <a href="https://unsplash.com/fr/photos/two-persons-arms-iJ2IG8ckCpA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </p>

        <div className="w-4/5 mx-auto">
          <h1 className="text-2xl text-end rounded-tl-lg pt-3 text-white font-light tracking-wider" >Comment se passe un traitement EMDR?</h1>
          <hr className="w-25 text-gray-50 mr-0 ml-auto"/>
        </div>

          <p className="text-justify w-2/3 text-white font-light text-lg mt-1">
          PREPARATION
          La préparation au traitement est indispensable, les entretiens préliminaires permettent de :
          Construire une relation thérapeutique de confiance.
          Valider l’indication de la thérapie EMDR et de définir l’objectif de la thérapie.
          Apprendre la pratique de moyen de stabilisation émotionnelle qui peuvent être utilisé en cours de séance et pratiqué a domicile entre les séances.


          SEANCES DE TRAITEMENT

          Lorsque la personne est prête, le traitement à proprement parlé peut commencer. Suivant là où les problématiques du patient cela peut prendre un certain temps.
          Les souvenirs perturbants à l’origine de la problématique du patient sont alors retraité l’un après l’autre.
          Un souvenir peut nécessiter plusieurs séances.

          Le patient est invité à se concentrer sur le souvenir traumatisant et toute ses composantes : sensations, émotions, pensée négative sur lui. Ensuite le patient suit le mouvement des doits du thérapeute en laissant venir ce qui vient spontanément.
          D’autres stimulations bilatérale comme les sons où les tapotements peuvent être utilisé.
          C’est un processus de libre association des idées, sensations, émotions, pensée qui se déroule alors, de la même manière que lorsque nous rêvons la nuit.
          Entre chaque série de stimulations, la patient dit ce qui lui vient spontanément à l’esprit. Nous effectuons des séries de stimulation jusqu’à ce que le souvenir ne génère plus de perturbation chez le patient.
          Le retraitement de ce souvenir se termine par l’installation d’une pensée positive que de bonne sensation corporelle confirment.

          Une séance d’EMDR dure autour de 60 minutes.
          </p>
        
      </div>
    </div>
  )
}
