import { Container } from "reactstrap";
import SectionHeader from "../../commons/SectionHeader";
import { commonData } from "../../assets/common";
import devAvatar from "../../assets/developer-avatar.png";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(commonData.email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <div className="pt-16 pb-8" id="about">
      <Container>
        <SectionHeader header={"About"} />
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            className="w-32 md:w-52 transition-all duration-300 cursor-pointer hover:scale-[1.1]"
            src={devAvatar}
            alt="Developer Avatar"
          />
        </div>

        {/* Heading */}
        <h6 className="my-8 text-xl md:text-2xl font-bold text-center">
          I&apos;m Mohamed Ashraf
        </h6>

        {/* About Text */}
        <div className="flex flex-col justify-center items-center">
          <p className="max-w-[90%] md:max-w-[65%] text-sm md:text-base text-center">
            {commonData.about}
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center my-8">
          <span className="text-sm md:text-base">
            Drop a mail: {commonData.email}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyEmail}
              className="p-1 rounded hover:bg-gray-200"
              title="Copy email"
            >
              <ContentCopyIcon />
            </button>
            <span
              className={`text-sm text-[#4070f4] transition-opacity duration-300 ${
                isCopied ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied!
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
