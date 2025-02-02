import projectDataJSON from "../projectDetails/projectData.json";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = [
    { websiteName: "SwiftEats", color: "bg-[#7F3E0A]/20" },
    { websiteName: "ChatterBox", color: "bg-[#f0f8ff]" },
    { websiteName: "Teerex", color: "bg-[#8FE070]/25" },
    { websiteName: "Admin Dashboard", color: "bg-[#f0f8ff]" },
  ];

  return (
    <div id="work" className="pt-24 text-sm px-28 max-sm:px-6">
      <div className="flex items-center justify-between pb-12 font-inter max-sm:text-2xl">
        <div className="text-4xl font-normal max-sm:text-2xl">My Work</div>
        <div className="text-lg max-sm:text-xs">Hands-on Experience</div>
      </div>

      {projects.map((project, idx) => (
        <ProjectCard
          key={project.websiteName}
          btnColor="bg-[#5A555B]"
          reverse={idx % 2 !== 0}
          projectpath={project.websiteName}
          projectMetaData={
            projectDataJSON[project.websiteName]["projectMetaData"]
          }
        />
      ))}
    </div>
  );
};

export default Project;
