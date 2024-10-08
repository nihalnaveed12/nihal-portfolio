import React from "react";

function About() {
  return (
    <section id="about" className="section">
      <div className="container flex flex-col justify-center reveal-up">
        <div className="bg-zinc-800/50 rounded-2xl p-7 md:p-10 reveal-up">
        <h1 className="headline-2 mb-6">About Me</h1>
          <p className="text-zinc-300 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Nihal Naveed, a professional web developer with a
            knack for crafting visually stunning and highly functional websites.
            Combining creativity and technical expertise. I transform your
            vision into digital masterpiece that excels in both appearance and
            performance.
          </p>
            <img
              src="./images/coding.png"
              width={40}
              height={40}
              alt="logo"
              className="rounded-full ml-auto md:w-[50px] md:h-[50px] reveal-up"
            />
          </div>
      </div>
    </section>
  );
}

export default About;
