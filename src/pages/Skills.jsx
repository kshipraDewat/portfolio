import htmlLOGO from "../assets/techSVG/html.svg";
import csslogo from "../assets/techSVG/css.svg";
import jslogo from "../assets/techSVG/js.svg";
import reactlogo from "../assets/techSVG/react.svg";
import bootstraplogo from "../assets/techSVG/bootstrap.svg";
import materiallogo from "../assets/techSVG/material.svg";
import tailwindlogo from "../assets/techSVG/tailwind.svg";
import gitlogo from "../assets/techSVG/git.svg";
import githublogo from "../assets/techSVG/github.svg";
import jsonlogo from "../assets/techSVG/json.svg";
import restAPILogo from "../assets/techSVG/rest-api.svg"
import nodelogo from "../assets/techSVG/node.svg"
import mongodblogo from "../assets/techSVG/mongodb.svg"

import TechSkillsCard from "../components/TechSkillsCard";

const Skills = () => {
  return (
    <div className="h-fit px-28 py-10 max-sm:px-8">
      <div className="">
        <h1 className="mb-3 text-4xl font-normal max-sm:text-2xl">
          Tech Stack
        </h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi qui animi minus nemo dolorem.</p> */}
        {/* skills cols */}

        <div className="flex justify-evenly  py-8 text-center text-xl leading-[56px] ">
          <div className=" flex  flex-col    ">
            <TechSkillsCard logo={htmlLOGO} text={"HTML"} />
            <TechSkillsCard logo={csslogo} text={"CSS"} />
            <TechSkillsCard logo={jslogo} text={"JavaScript"} />
          </div>
          <div className="sm:border-l  sm:border-gray-600"></div>
          <div className=" flex  flex-col  ">
            <TechSkillsCard logo={tailwindlogo} text={"Tailwind"} />
            <TechSkillsCard logo={bootstraplogo} text={"Bootstrap"} />
            <TechSkillsCard logo={jsonlogo} text={"JSON"} />
          </div>

          <div className="sm:border-l  sm:border-gray-600"></div>
          <div className=" flex  flex-col  ">
            <TechSkillsCard logo={nodelogo} text={"Node"} />
            <TechSkillsCard logo={mongodblogo} text={"Mongo DB"} />
            <TechSkillsCard logo={reactlogo} text={"React"} />
            
          </div>
          
          <div className="sm:border-l  sm:border-gray-600"></div>
          <div className=" flex  flex-col  ">
            <TechSkillsCard logo={gitlogo} text={"Git"} />
            <TechSkillsCard logo={githublogo} text={"GitHub"} />
            <TechSkillsCard logo={restAPILogo} text={"HTTP & REST APIs"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
