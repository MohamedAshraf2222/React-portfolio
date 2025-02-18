import { BsBoxArrowUpRight } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <>
      <div className="flex flex-col justify-between p-4 sm:p-5 w-[90%] h-auto rounded-2xl shadow sm:w-[360px] works-hover">
        {/* Image Section */}
        <div>
          <div className="relative w-full h-[180px] sm:h-[230px]">
            <img
              src={image}
              alt={"image"}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          {/* Content Section */}
          <div className="mt-4 sm:mt-5">
            <h3 className="font-bold text-xl sm:text-[24px]">{name}</h3>
            <p className="text-secondary text-sm sm:text-[14px] mt-2 sm:mt-4 mb-6 sm:mb-10">
              {description.slice(0, 100)}...
            </p>
          </div>
        </div>

        {/* Tags and Links Section */}
        <div>
          <div className="flex justify-between items-center">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2 sm:mt-4">
              {tags.map((tag, index) => (
                <p
                  key={index}
                  className={`text-sm sm:text-[14px] ${tag.color}`}
                >
                  #{tag.name}
                </p>
              ))}
            </div>

            {/* Live Demo Link */}
            <div className="cursor-pointer">
              <Link to={live_demo_link} target="_blank">
                <BsBoxArrowUpRight className="hover:text-[#4070f4]" />
              </Link>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 sm:gap-4 items-center">
            {source_code_link && (
              <Button className="bg-[#4070f4] text-white w-max px-3 sm:px-4 py-1 rounded mt-3 sm:mt-4 border hover:bg-white hover:text-[#4070f4] hover:border hover:border-[#4070f4]">
                <Link to={source_code_link} target="_blank">
                  Code
                </Link>
              </Button>
            )}
            {live_demo_link && (
              <Button className="bg-[#4070f4] text-white w-max px-4 sm:px-5 py-1 rounded mt-3 sm:mt-4 border hover:bg-white hover:text-[#4070f4] hover:border hover:border-[#4070f4]">
                <Link to={live_demo_link} target="_blank">
                  Live
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  source_code_link: PropTypes.string.isRequired,
  live_demo_link: PropTypes.string.isRequired,
};

export default ProjectCard;
