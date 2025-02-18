import PropTypes from "prop-types";

const ExperienceCard = ({ job }) => {
  return (
    <div className="flex flex-col justify-center items-center shadow-lg w-[80%] sm:w-[80%] md:w-[60%] py-4 sm:py-6 text-base sm:text-lg rounded-md font-semibold gap-2 hover:scale-[1.1] duration-[600ms] cursor-pointer">
      <div>{job.jobTitle}</div>
      <div>{job.company}</div>
      <div>{job.date}</div>
    </div>
  );
};
ExperienceCard.propTypes = {
  job: PropTypes.string.isRequired,
};

export default ExperienceCard;
