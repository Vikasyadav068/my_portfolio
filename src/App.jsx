import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Education,
  Tech,
  Hero,
  Navbar,
  StarsCanvas,
  Works,
} from "./components";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Tech />
          <Works />
          <Education />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
