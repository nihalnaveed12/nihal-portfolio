import React from "react";
import PropTypes from "prop-types";
function ProjectCard({ imgSrc, title, tags, projectLink, clasess }) {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60  ring-inset ring-1 ring-zinc-50/5 " +
        clasess 
      }
    >
      <figure className="img-box aspect-square rounde-lg mb-4">
        <img src={imgSrc} alt={title} className="img-cover" loading="lazy" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div className="">
          <h3 className="title-1 mb-3">{title}</h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((tag, key) => (
              <span
                className="h-8 text-sm items-center text-zinc-400 bg-zinc-50/5 grid px-3 rounded-lg"
                key={key}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0 ">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  clasess: PropTypes.string,
};

export default ProjectCard;
