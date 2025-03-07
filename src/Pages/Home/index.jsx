import React from "react";
import {
  About,
  Navbar,
  Header,
  Contact,
  Skills,
  // Projects,
  Experience,
} from "../../components/Home";
import { Spinner } from "reactstrap";
import { Suspense } from "react";

const Projects = React.lazy(() => import("../../components/Home/Projects"));
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
