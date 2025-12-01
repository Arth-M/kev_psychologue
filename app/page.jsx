export default function Home() {
  return (
    <div className="mt-30 mask-b-to-90%">
      <div id="section-1" className="h-90"></div>
      <h1 className="bg-danube-600">Welcome to Next.js!</h1>

      <div
        className="
          my-30
          w-full
          h-0
          border-t-40 border-t-transparent
          border-b-5 border-b-blue-400
          border-l-100 border-l-blue-400
          border-r-100 border-r-blue-400"
      ></div>

      <div style={{clipPath: 'polygon(0% 0%,2% 95%,98% 95%,100% 0%, 100% 100%, 0% 100%)'}} className="w-full
      h-20 bg-teal-300">
      </div>

      <div className="relative bottom-0 w-full h-[250px] bg-blue-400 [clip-path:polygon(0%_40%,100%_0,100%_100%,0%_100%)] z-10">
        <p className="text-center w-full pt-25 z-20">coucou</p></div>

      <p>Your app is running successfully.</p>

      <div
        className="
          relative w-full h-40 bg-blue-400
          after:content-['']
          after:absolute after:right-0 after:top-40
          after:w-full after:h-[50px]
          after:bg-blue-400
          after:[clip-path:polygon(100%_0,100%_100%,0_0)]
        "
      > coucou </div>



      <div className="h-90 w-full bg-danube-400/70"></div>
      <div className="h-90 w-full bg-mantis-400/60"></div>
      <div className="h-90 w-full bg-mako-400/70"></div>
    </div>
  );
}
