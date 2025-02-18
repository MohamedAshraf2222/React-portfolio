import "./App.css";
import {
  About,
  Navbar,
  Header,
  Contact,
  Skills,
  Projects,
  Experience,
} from "./components";

function App() {
  // محتاجين Loader ,زرار في الاخر يطلعك فوق ولينك الواتساب 

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
}

export default App;
