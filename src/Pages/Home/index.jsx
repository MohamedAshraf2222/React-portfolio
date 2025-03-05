import React from "react";
import {
  About,
  Navbar,
  Header,
  Contact,
  Skills,
  Projects,
  Experience,
} from "../../components/Home";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
