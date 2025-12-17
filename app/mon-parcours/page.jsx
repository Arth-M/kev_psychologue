import Image from "next/image";

export default function MonParcours() {
  return (
    <div id="section-1">
    <div className="w-full bg-gray-400 relative rounded-b-2xl mt-22 " >

      <div className="relative z-0 ">
        <div className="w-fit absolute z-40 top-8">
          <h1 className="text-3xl text-center rounded-r-lg py-3 md:pl-30 md:pr-4 px-4 bg-gray-400 text-white font-light tracking-wider" >Mon parcours</h1>
          <hr className="w-25 text-gray-50 md:ml-30 ml-4"/>
        </div>

        <Image
            src={`/images/chemin.jpeg`}
            alt="Image d'étude"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-[0%_5%] h-20 opacity-70 z-10"
          />
          </div>
      <div className="w-4/5 mx-auto pt-15 pb-10" >
        <p className="text-white text-lg">
          J’ai été diplômé à l’université de Lettres Paul VALERY de Montpellier en 2016.
        </p>
        <div className="flex flex-wrap mt-10 space-x-10 items-center w-full">
          <Image
            src={`/images/etudes.jpg`}
            alt="Image d'étude"
            width="5184"
            height="3456"
            preload="true"
            className="object-cover object-center w-1/3 md:-ml-6"
          />
          <p className="text-white text-lg w-3/5 text-justify">
            J’ai suivi le parcours : Phénoménologie clinique du sportif et des problématiques corporelles
            Pour le Master 1, j’ai écris et soutenus le mémoire :
            « Contiens moi, j’ai besoin de liberté »
            Recherche sur le processus de subjectivation à l’adolescence à travers l’analyse du phénomène de contenance institutionnelle pouvant permettre au sujet une amorce de contenance psychique.
            Pour le master 2, j’ai écris et soutenus le mémoire :
            « Se rencontrer et devenir »
            Les médiations corporelles comme chemin de Nostrité et de réalisation de soi.
          </p>
        </div>
        </div>
        </div>

        <div className="w-8/9 flex bg-gray-400 mx-auto px-20">
        <hr className="w-0.5 text-gray-50 mr-[12%]"/>
        <hr className="w-0.5 text-gray-50 mr-[10%]"/>
        <hr className="w-0.5 text-gray-50 mr-[7%]"/>
        <hr className="w-0.5 text-gray-50 mr-[5%]"/>
        <hr className="w-0.5 text-gray-50 mr-[4%]"/>
        <hr className="w-0.5 text-gray-50 mr-[3%]"/>
        <hr className="w-[18%] text-gray-50"/>
        <hr className="w-0.5 text-gray-50 ml-[3%]"/>
        <hr className="w-0.5 text-gray-50 ml-[4%]"/>
        <hr className="w-0.5 text-gray-50 ml-[5%]"/>
        <hr className="w-0.5 text-gray-50 ml-[7%]"/>
        <hr className="w-0.5 text-gray-50 ml-[10%]"/>
        <hr className="w-0.5 text-gray-50 ml-[12%]"/>
        </div>

        <div className="w-full bg-gray-400 relative mt-0.3 rounded-t-2xl" >
        <div className="w-4/5 mx-auto pt-5 pb-10" >
         <div className="flex mt-6 space-x-10 items-center w-full">
          <div className="w-3/5 text-wrap">
          <p className="text-white text-lg mt-2 text-justify">
            A l’obtention du diplôme, j’ai tout de suite était engagé à la bergerie de Faucon.
            Cette institution était mon lieu de stage en Master 2. Il s’agit d’un lieu de vie pour adolescents en difficultés, suivies par l’aide sociale à l’enfance où la protection judiciaire de la jeunesse. Ce lieu de vie se situe dans les gorges du Verdon et a la spécificité de se trouver en pleine nature et de centrer son travail sur la zoo-pédagogie. Pendant 3 années j’ai partagés le quotidien des adolescents , de l’équipe pluridisciplinaire…et des nombreux animaux présent sur le site.
          </p>
          <p className="text-white text-lg mt-2 text-justify">
            En 2019 j’ai intégré le service «  Parenthèse » , Institution de l’association ADAGES.
            J’ai occupé le poste d’intervenant en espace de rencontres. Il s’agissait de médiatiser des droits de visites entre parents et enfants ( de 1 à 17 ans). Ces droits de visites étaient dispensés par le juge aux affaires familiales.
            Les familles venaient de tous horizons et rencontrées des problématiques variées
          </p>
          <p className="text-white text-lg mt-2 text-justify">
            J’ai occupé ce poste jusqu’en 2023, aujourd’hui je commence une nouvelle aventure en m’installant en tant que psychologue libéral.
          </p>
          </div>

          <Image
            src={`/images/IMG_6305.jpg`}
            alt="Image de paysage"
            width="3024"
            height="4032"
            preload="true"
            className="object-cover object-center w-1/3 md:ml-3"
          />

        </div>
      </div>



    </div>
    </div>
  )
}
