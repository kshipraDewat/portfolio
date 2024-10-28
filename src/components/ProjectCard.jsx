/* eslint-disable react/prop-types */
import { HashLink } from "react-router-hash-link";

import { useState, useEffect } from "react";

const ProjectCard = ({ projectMetaData, reverse, projectpath }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 640) {
      if (isZoomed) document.body.style.overflow = "hidden";
      else document.body.style.overflow = "scroll";
    }
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [isZoomed]);
  const handleZoom = () => {
    if (window.innerWidth > 640) {
      setIsZoomed(!isZoomed);
    }
  };

  const {
    name,
    techStack,
    site,
    github,
    projectId,
    projectInfo,
    mockupImg,
    webColor,
  } = projectMetaData;
  return (
    <div
      id={`${projectId}`}
      className={`group mb-20 flex justify-between border border-gray-400 ${
        reverse && "flex-row-reverse"
      } max-sm:flex-col`}
    >
      <div className=" relative flex-1 p-10 text-black max-sm:p-5 max-sm:text-sm text-base ">
        <h1 className="pb-6 text-3xl max-sm:pb-3 max-sm:text-xl">{name} </h1>
        <p className="pb-2 text-justify ">{projectInfo}</p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 ">
          {techStack.map((tech) => (
            <p key={tech} className={` bg-gray-200 px-2 py-0.5  text-black`}>
              {tech}
            </p>
          ))}
        </div>
        <div className="absolute  mt-10 left-0 right-0  flex items-baseline justify-between px-8 max-sm:static max-sm:flex-col max-sm:gap-y-8 max-sm:px-0">
          <div className="z-20 flex gap-8 max-sm:gap-6">
            <a href={site} target={`_blank`}>
              <p className=" relative border-b-2 border-gray-400  before:absolute  before:-bottom-[1.8px] before:h-full before:w-0 before:border-b-2 before:border-transparent before:transition-all  before:duration-500 hover:cursor-pointer   before:hover:w-full before:hover:border-black">
                View Site
              </p>
            </a>
            <a href={github} target={`_blank`}>
              <p className="  relative border-b-2 border-gray-400  before:absolute  before:-bottom-[1.8px] before:h-full before:w-0 before:border-b-2 before:border-transparent before:transition-all  before:duration-500 hover:cursor-pointer   before:hover:w-full before:hover:border-black">
                GitHub Repo
              </p>
            </a>
            
          </div>
          <HashLink
            className=""
            to={`/project/${projectpath}/#top`}
            scroll={(el) => {
              const yOffset = -100;
              const y =
                el.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: "auto" });
            }}
          >
          
          </HashLink>
        </div>
      </div>
      {/* image column */}
      <div className="">
        <div className="px-8">
          <div
            className={` h-[400px] w-[500px]  max-sm:h-[300px] max-sm:w-[350px] `}
          >
            <div
              className={`h-full w-full  ${isZoomed ? "fixed left-0 top-0 z-[200] bg-gray-400 bg-opacity-50 backdrop-blur-[2px] backdrop-filter" : "static"}`}
            >
              <img
                src={mockupImg}
                loading="lazy"
                onClick={() => handleZoom()}
                alt="mockup-img"
                className={`h-full w-full  object-contain transition-all duration-200  ${isZoomed ? "sm:cursor-zoom-out " : "sm:cursor-zoom-in sm:hover:brightness-75"}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
