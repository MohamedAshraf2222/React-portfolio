import { experience } from "../../assets/data";
import ExperienceCard from "../../commons/ExperienceCard";
import SectionHeader from "../../commons/SectionHeader";

const Experience = () => {
  return (
    <div id="experience">
      <SectionHeader header={"Experience"} />
      <div className="flex flex-col justify-center items-center gap-6 my-8">
        {experience.map((jobDesc) => {
          return (
            <>
              <ExperienceCard job={{...jobDesc}} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience