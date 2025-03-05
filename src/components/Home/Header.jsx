import cv from "../../assets/Mohamed_Ashraf-Feb-2025.pdf";
import headerGIF from "../../assets/web-development.gif";

const Header = () => {
return (
  <div
    className="min-h-[90vh] text-black flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-0 section px-6 md:px-12 lg:px-24 xl:px-40 mt-[100px]"
    id="header"
  >
    <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold gap-8 md:gap-5 text-[#0e2431] text-center md:text-left">
      <h2>
        Hi 👋,
        <br /> I&apos;m {"  "}
        <span className="text-[#4070f4] inline-block my-4 sm:my-0">Mohamed Ashraf</span>
        <br /> Front End Developer
      </h2>
      <button className="bg-[#4070f4] text-base w-fit text-white border border-solid border-[#4070f4] px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-white hover:text-[#4070f4] hover:shadow-lg mx-auto md:mx-0">
        <a download={"mohamed_ashraf_cv.pdf"} href={cv}>
          Download CV
        </a>
      </button>
    </div>

    <img
      src={headerGIF}
      className="max-w-[250px] sm:max-w-[250px] md:max-w-[300px]"
      alt="web-development gif"
    />
  </div>
);
};

export default Header;