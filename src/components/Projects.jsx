import React from "react";
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/images/project-1.png",
    title: "Resume Builder",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/exp3.png",
    title: "Free stock photo app",
    tags: ["API", "SPA"],
    projectLink: "https://pixstock-official.vercel.app/",
  },
  {
    imgSrc: "/images/todo pic.png",
    title: "Todo List App",
    tags: ["React js", "Tailwind CSS" , "Context API"],
    projectLink: "https://to-do-list-nihal.netlify.app/",
  },
  {
    imgSrc: "/images/12th.png",
    title: "Movie Search App",
    tags: ["Next js","React", "tailwind css" , "Shadcn UI"],
    projectLink: "https://movies-search-app-nu.vercel.app/",
  },
];

function Projects() {
  // md:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 md:grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {works.map(({imgSrc , title , tags ,projectLink},key) => (
                <ProjectCard 
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                clasess="reveal-up"
                />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
