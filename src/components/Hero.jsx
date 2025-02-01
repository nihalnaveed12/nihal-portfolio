import React from "react";
import { PrimaryButton, OutlineButton } from "./Button";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {

  useGSAP(()=>{
    gsap.from(".home", {
      y:50,
      duration:2,
      opacity: 0,
      ease:'power1.inOut'
    })
  })

  const onButtonClick = () => {
    const pdfUrl = "Nihal Naveed Professional Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <section id="home" className="home pt-28 lg:pt-28">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-2">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9">
              <img
                src="./images/logo.jpg"
                alt="logo"
                width={40}
                height={40}
                className="img-cover rounded-full "
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute w-2 h-2 rounded-full bg-emerald-400 inset-0 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1">
            Building Scalable Modern Websites for the Future
          </h2>
          <div className="flex gap-3 flex-col sm:flex-row ">
            <PrimaryButton label="Download CV" icon="download" className='' onClick={onButtonClick} target="_blank"/>

            <OutlineButton label="Scroll down" href='#about' icon="arrow_downward" />
          </div>
        </div>

        <div className="hidden lg:block pb-20">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="./nihal.png"
              width={656}
              height={800}
              alt="Nihal Naveed Photo"
              className=""
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;
