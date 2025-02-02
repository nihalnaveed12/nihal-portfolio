import React from "react";
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: "/furniture-web.png",
    title: "Furniture E-commerce Markeplace",
    tags: ["Next JS", "Sanity CMS", "TailwindCSS", "Redux Toolkit", "TypeScript"],
    projectLink: "https://giaic-hackathon2-xi.vercel.app/",
  },
  {
    imgSrc: "/agriswara.png",
    title: "Agriculture Blog Website Agriswara",
    tags: ["Next JS","TailwindCSS", "Redux Toolkit", "Framer Motion", "TypeScript"],
    projectLink: "https://giaic-hackathon2-xi.vercel.app/",
  },
  {
    imgSrc: "/images/blogss.png",
    title: "Full Stack Blog App",
    tags: ["React JS", "Appwrite", "TailwindCSS", "Redux Toolkit"],
    projectLink: "https://blog-website-nihal.vercel.app/",
  },
  {
    imgSrc: "/portfolio-nihal.png",
    title: "Portfolio Website",
    tags: ["Next js","React", "tailwind css" , "Shadcn UI" , "Framer motion",],
    projectLink: "https://portfolio-website-nihal.vercel.app/",
  },
  {
    imgSrc: "/clothes-store.png",
    title: "E-commerce Website",
    tags: ["Next js", "Tailwind CSS" , "React", "Redux-toolkit" , "Framer Motion"],
    projectLink: "https://bs-fashion.vercel.app/",
  },
  {
    imgSrc: "/resume-pic.png",
    title: "Resume Builder",
    tags: ["HTML", "CSS", "JavaScript"],
    projectLink: "https://resumebuilder-9q8o.vercel.app/",
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
