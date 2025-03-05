import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Project from "./Pages/Project";

function App() {
  // محتاجين Loader ,زرار في الاخر يطلعك فوق ولينك الواتساب

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/:projectId" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
