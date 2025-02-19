import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [section, setSection] = useState("header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function throttle(func, limit) {
    let inThrottle = false;
    return function (...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  const navbarfun = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setSection(hash);
    } else {
      setSection("header");
    }
  };

  const navLinks = [
    { title: "Home", hash: "header" },
    { title: "About", hash: "about" },
    { title: "Experience", hash: "experience" },
    { title: "Projects", hash: "projects" },
    { title: "Skills", hash: "skills" },
    { title: "Contact", hash: "contact" },
  ];

  useEffect(() => {
    const throttledNavbarfun = throttle(navbarfun, 100);
    window.addEventListener("scroll", throttledNavbarfun);
    return () => window.removeEventListener("scroll", throttledNavbarfun);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow w-full fixed top-0 left-0 z-[100] bg-white">
      <nav className="flex justify-between items-center px-6 md:px-24 py-4 font-semibold">
        <Link
          to={"header"}
          className="inActive"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-100}
          duration={500}
          isDynamic={true}
          ignoreCancelEvents={false}
          spyThrottle={500}
          activeClass=""
        >
          <img className="w-10 cursor-pointer" src={logo} alt="logo" />
        </Link>
        <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>
        <ul
          className={`fixed md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none py-4 md:py-0 transition-all duration-300 ease-in-out transform ${
            isMobileMenuOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100"
          } flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center`}
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.hash}
              onSetActive={() => setSection(link.hash)}
              className={`navLink ${
                section === link.hash
                  ? "active border-b-4 border-solid border-[#4070f4] py-2 cursor-pointer"
                  : "border-b-4 border-solid border-white py-2 cursor-pointer"
              }`}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
