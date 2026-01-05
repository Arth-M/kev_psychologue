import Image from "next/image";

export default function InformationsPratiques() {
  return (
    <div id="section-1">
      <div className="mt-35 mb-30 flex items-center justify-center space-x-25">
        <div>

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
        </div>

        <div className="">
          <iframe id="#maps" className="mx-auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.531190821487!2d4.008853675934832!3d43.65792125212588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6a138c4189c73%3A0xc36827070fa392fb!2sKevin%20Nicolas!5e0!3m2!1sfr!2sfr!4v1765793904755!5m2!1sfr!2sfr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" alt="Plan de la localisation du cabinet"></iframe>
        </div>
      </div>
    </div>
  )
}
