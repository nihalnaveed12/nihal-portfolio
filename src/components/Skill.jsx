import React from "react";
import SkillCard from "./SkillCard";

const skillItem = [
  {
    imgSrc: "/images/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/next-js.svg",
    label: "Next Js",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/social.png",
    label: "Git",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/github.png",
    label: "GitHub",
    desc: "Source Code Manager",
  },
];

function Skill() {
  return (
    <section className="section reveal-up" id="skills">
      <div className="container">
        <h2 className="headline-2 reveal-up">Here are the technologies I work with</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard 
            key={key}
            imgSrc={imgSrc}
            label={label}
            desc={desc}
            classes='reveal-up'
            />
          )
        )}
        </div>
      </div>
    </section>
  );
}

export default Skill;
