import React from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../assets/data";
import { Contact } from "../../components/Home";
import logo from "../../assets/logo.jpeg";
import { Button } from "reactstrap";
import { useState } from "react";

const Project = () => {
  const { projectId } = useParams();

  const project = projects.find((e) =>
    projectId ? e.id === +projectId : null
  );
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      <header className="shadow w-full fixed top-0 left-0 z-[100] bg-white">
        <nav className="flex justify-between items-center px-6 md:px-24 py-4 font-semibold">
          <Link to={"/"}>
            <img
              className="w-10 cursor-pointer"
              src={logo}
              alt="logo"
              loading="lazy"
            />
          </Link>

          <Link
            to={"/"}
            className={`navLink border-b-4 border-solid border-white py-2 cursor-pointer`}
          >
            Home
          </Link>
        </nav>
      </header>
      <div className="mt-[130px]">
        <div className="flex flex-col lg:flex-row mb-10 px-4 sm:px-10 md:px-20 lg:px-40">
          <div className="items-stretch w-full lg:flex-1">
            {isImageLoading && (
              <div className="text-center w-full h-full flex justify-center items-center">
                <i
                  className="mdi mdi-loading mdi-spin me-2"
                  style={{ fontSize: "24px" }}
                />
                Loading...
              </div>
            )}
            <img
              className="h-full w-full object-cover"
              src={project.image}
              alt="project Image"
              loading="lazy"
              onLoad={()=>setIsImageLoading(false)}
              onError={()=>setIsImageLoading(false)}
            />
          </div>
          <div className="flex flex-col mt-6 lg:mt-0 lg:mx-16 lg:flex-1 justify-between">
            <h2 className="text-[#3d3d3d] text-2xl sm:text-3xl md:text-4xl font-bold">
              {project.name}
            </h2>

            <div className="my-6 sm:my-8 text-sm sm:text-base text-left flex flex-col gap-3">
              {project.description.split("\n").map((line, index) => (
                <div key={index}>
                  {line}
                  <br />
                </div>
              ))}
            </div>

            <p className="text-sm text-left sm:text-base">
              <span className="font-semibold">Category: </span>
              {project.category}
            </p>

            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 text-[#818181]">
              {project.tags.map((tag, index) => (
                <p key={index} className={`text-xs sm:text-sm ${tag.color}`}>
                  #{tag.name}
                </p>
              ))}
            </div>

            <div className="flex gap-3 sm:gap-4 items-center mt-6 sm:mt-8">
              {project?.source_code_link && (
                <Button className="bg-[#4070f4] text-white w-max px-3 sm:px-4 py-1 rounded text-sm sm:text-base border hover:bg-white hover:text-[#4070f4] hover:border-[#4070f4]">
                  <Link to={project.source_code_link} target="_blank">
                    Code
                  </Link>
                </Button>
              )}
              {project?.live_demo_link && (
                <Button className="bg-[#4070f4] text-white w-max px-4 sm:px-5 py-1 rounded text-sm sm:text-base border hover:bg-white hover:text-[#4070f4] hover:border-[#4070f4]">
                  <Link to={project.live_demo_link} target="_blank">
                    Live
                  </Link>
                </Button>
              )}
            </div>

            <Link className="w-full mt-6 sm:mt-8" to={"/"}>
              <button className="text-white py-3 sm:py-4 px-6 sm:px-10 font-semibold bg-[#4070f4] w-full border-none outline-none cursor-pointer hover:bg-[#3056d3] transition-colors">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
        <Contact />
      </div>
    </>
  );
};

export default Project;
