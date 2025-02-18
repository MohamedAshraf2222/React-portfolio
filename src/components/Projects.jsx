import { projects } from "../assets/data";
import ProjectCard from "../commons/ProjectCard";
import SectionHeader from "../commons/SectionHeader";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <SectionHeader header={"Projects"} />
      <div className="flex flex-wrap gap-7 justify-center mt-20 mb-24">
        {projects.map((project, index) => (
          <>
            <ProjectCard key={index} index={index} {...project} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
