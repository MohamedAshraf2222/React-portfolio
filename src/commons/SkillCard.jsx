import PropTypes from "prop-types";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="shadow-lg w-[80%]  lg:w-[70%] xl:w-[49%] rounded-md py-4 text-left px-8 flex items-center gap-3 font-semibold cursor-pointer">
      <img className="w-10" src={icon} alt={name} />
      {name}
    </div>
  );
};
SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SkillCard;
