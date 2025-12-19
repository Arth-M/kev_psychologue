import Image from "next/image";

export default function PourQui() {
  return (
    <div className="bg-sky-500 h-50 w-80 mx-auto mt-20">Pour qui

    <br />Ado adultes
    <br />
    Phobies Traumas Addictions

    <Image
        src={`/images/IMG_2315.jpg`}
        alt="Image d'un caillou taillé"
        width="3024"
        height="3024"
        preload="true"
        className="object-center inline"
      />
    </div>
  )
}
