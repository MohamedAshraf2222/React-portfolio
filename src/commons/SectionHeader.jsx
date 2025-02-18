import PropTypes from "prop-types";

const SectionHeader = ({ header }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-2xl sm:text-3xl md:text-[2rem] text-[#4070f4] mt-2 mb-4 text-center font-bold border-[#4070f4] border-b-4 max-w-fit">
        {header}
      </div>
    </div>
  );
};
SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default SectionHeader;
