import React from "react";
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/images/blog-screen.png",
    title: "Full Stack Blog App",
    tags: ["React JS", "Appwrite", "TailwindCSS", "Redux Toolkit"],
    projectLink: "https://blog-website-nihal.vercel.app/",
  },
  {
    imgSrc: "/images/project-1.png",
    title: "Resume Builder",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://resumebuilder-9q8o.vercel.app/",
  },
  {
    imgSrc: "/images/exp3.png",
    title: "Expense Tracker",
    tags: ["Next js","React", "tailwind css" , "Shadcn UI"],
    projectLink: "https://expensetracker-kqxy.vercel.app/",
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
