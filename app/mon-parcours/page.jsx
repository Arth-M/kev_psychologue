import Image from "next/image";

export default function MonParcours() {
  return (
    <div id="section-1">
    <div className="w-full bg-gray-400 mt-22 relative rounded-b-lg" >
      <Image
            src={`/images/chemin.jpeg`}
            alt="Image d'étude"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-[0%_5%] w-full h-70 opacity-60 bg-fixed"
          />
        <h1 className="absolute top-30 w-full text-center ml-2 text-5xl text-white font-light tracking-wider underline decoration-gray-50 decoration-1 underline-offset-4" >Mon parcours</h1>
      <div className="w-4/5 mx-auto pt-15 pb-10" >
        <p className="text-white text-lg">
          J’ai été diplômé à l’université de Lettres Paul VALERY de Montpellier en 2016.
        </p>
        <div className="flex mt-10 space-x-10 items-center w-full">
          <Image
            src={`/images/etudes.jpg`}
            alt="Image d'étude"
            width="5184"
            height="3456"
            preload="true"
            className="object-cover object-center w-1/3 -ml-6"
          />
          <p className="text-white text-lg w-3/5 text-justify">
            J’ai suivi le parcours : Phénoménologie clinique du sportif et des problématiques corporelles
            Pour le Master 1, j’ai écris et soutenus le mémoire :
            « Contiens moi, j’ai besoin de liberté »
            Recherche sur le processus de subjectivation à l’adolescence à travers l’analyse du phénomène de contenance institutionnelle pouvant permettre au sujet une amorce de contenance psychique
            Pour le master 2, j’ai écris et soutenus le mémoire :
            « Se rencontrer et devenir »
            Les médiations corporelles comme chemin de Nostrité et de réalisation de soi.
          </p>
        </div>
        </div>
        </div>

        <div className="w-full bg-gray-400 mt-0.5 relative rounded-t-lg" >
        <div className="w-4/5 mx-auto pt-10 pb-10" >
         <div className="flex mt-6 space-x-10 items-center w-full">
          <p className="text-white text-lg mt-2 w-3/5 text-justify">
            A l’obtention du diplôme, j’ai tout de suite était engagé à la bergerie de Faucon.
            Cette institution était mon lieu de stage en Master 2. Il s’agit d’un lieu de vie pour adolescents en difficultés, suivies par l’aide sociale à l’enfance où la protection judiciaire de la jeunesse. Ce lieu de vie se situe dans les gorges du Verdon et a la spécificité de se trouver en pleine nature et de centrer son travail sur la zoo-pédagogie. Pendant 3 années j’ai partagés le quotidien des adolescents , de l’équipe pluridisciplinaire…et des nombreux animaux présent sur le site.
            En 2019 j’ai intégré le service «  Parenthèse » , Institution de l’association ADAGES.
            J’ai occupé le poste d’intervenant en espace de rencontres. Il s’agissait de médiatiser des droits de visites entre parents et enfants ( de 1 à 17 ans). Ces droits de visites étaient dispensés par le juge aux affaires familiales.
            Les familles venaient de tous horizons et rencontrées des problématiques variées
            J’ai occupé ce poste jusqu’en 2023, aujourd’hui je commence une nouvelle aventure en m’installant en tant que psychologue libéral.
          </p>

          <Image
            src={`/images/IMG_6305.jpg`}
            alt="Image de paysage"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-center w-1/3 ml-3"
          />

        </div>
      </div>



    </div>
    </div>
  )
}
