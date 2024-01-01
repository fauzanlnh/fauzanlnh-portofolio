import { Routes, Route } from "react-router-dom";
import LayoutMain from "./components/LayoutMain";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <LayoutMain pages="index">
              <Home />
            </LayoutMain>
          }
        />
        <Route
          path="/about"
          element={
            <LayoutMain pages="about">
              <About />
            </LayoutMain>
          }
        />
        <Route
          path="/projects"
          element={
            <LayoutMain pages="projects">
              <Project />
            </LayoutMain>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
