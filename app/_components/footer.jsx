import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bottom-0 bg-transparent mt-8">
        <div className="mx-auto w-screen px-4 py-2">
          <div className="px-15">
            <hr className=" mb-3 border-gray-300 mx-auto lg:mb-8" />


          {/* logo novurba dans le cas screen >md */}
            <div className="flex flex-col md:hidden">
              <a href="/" className='mb-5'>
                <Image
                  src="/images/6410514c268519ca04980d2a_Logo essai 3.png"
                  alt="Logo de Novurba"
                  width="463"
                  height="452"
                  className="object-cover w-25 h-fit mx-auto bg-copperfield-400 rounded-full mt-5"
                  // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
                />
              </a>
             </div>


              <ul className="md:grid-cols-5 md:max-w-[70%] lg:max-w-[55%]  gap-x-2 gap-y-2 grid grid-cols-2 md:mx-auto tracking-wide">

                <li className='text-center w-fit mx-auto'>
                  <a href="/contact" className="w-fit" >Contact</a>
                </li>
                <li className='text-center w-fit mx-auto'>
                  <a
                    href="/notre-expertise"
                  >
                    Notre expertise
                  </a>
                </li>

                <li className="hidden md:flex"></li>

                <li className='text-center w-fit mx-auto'>
                  <a
                    href="/nos-realisations"
                  >
                    Nos réalisations
                  </a>
                </li>
                <li className='text-center w-fit mx-auto'>
                  <a href="/sitemap">Plan du site</a>
                </li>

              </ul>

                  <a href="/" className="hidden md:flex mx-auto -mt-12 w-fit">
                    <Image
                      src="/images/6410514c268519ca04980d2a_Logo essai 3.png"
                      alt="Logo de Novurba"
                      width="463"
                      height="452"
                      className="object-cover w-25 h-fit mx-auto bg-copperfield-400 rounded-full mt-5"
                      // className="object-cover w-25 h-fit rounded-full bg-copperfield-400"
                    />
                  </a>

              <div className="w-full flex justify-end mt-5 md:-mt-5">
              <div className="w-fit">
                <hr className="my-2 border-gray-300 mx-auto md:my-3" />
                <p className="text-xs text-end tracking-wider">Réalisé par <a href="http://www.atuweb.fr" className="text-xs text-center" target="_blank">ATU-Web</a></p>
              </div>
              </div>
              </div>
            </div>

    </footer>
  )
}
