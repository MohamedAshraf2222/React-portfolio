import { technologies } from "../../assets/data";
import SectionHeader from "../../commons/SectionHeader";
import SkillCard from "../../commons/SkillCard";
const Skills = () => {
  return (
    <div id="skills">
      <SectionHeader header={"Skills"} />
      <div className="flex justify-center items-center w-full">
        <div className="flex flex-wrap justify-center w-[80%] items-center gap-6 my-8">
          {technologies.map((tech,i) => (
                <SkillCard key={i} icon={tech.icon} name={tech.name} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
