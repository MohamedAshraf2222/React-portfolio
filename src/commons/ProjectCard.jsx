import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const ProjectCard = ({
  id,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      <div className="flex flex-col justify-between p-4 sm:p-5 w-[90%] h-auto rounded-2xl shadow sm:w-[360px] works-hover">
        {/* Image Section */}
        <div>
          {isImageLoading && (
            <div className="flex justify-center items-center h-[180px] sm:h-[230px] w-full bg-white">
              <div className="text-center">
                <i
                  className="mdi mdi-loading mdi-spin me-2"
                  style={{ fontSize: "24px" }}
                />
                Loading...
              </div>
            </div>
          )}
          <Link to={`/project/${id}`} onClick={() => scrollToTop()}>
            <div className="relative w-full h-[180px] sm:h-[230px] transition-all duration-300 hover:scale-[1.05]">
              <img
                src={image}
                alt={"image"}
                className={`object-cover w-full h-full rounded-2xl ${
                  isImageLoading ? "hidden" : "block"
                }`}
                loading="lazy"
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
            </div>
          </Link>

          {/* Content Section */}
          <div className="mt-4 sm:mt-5">
            <Link to={`/project/${id}`}>
              <h3 className="font-bold text-xl sm:text-[24px]">{name}</h3>
            </Link>
            <p className="text-secondary text-sm sm:text-[14px] mt-2 sm:mt-4 mb-6 sm:mb-10">
              {description.slice(2, 100)}...
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

export default ProjectCard;
