import { useState } from "react";

import Header from "../Header";
import Gallery from "../Gallery";
import Slider from "../Slider";

function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <div className={`app ${isLight ? "light" : ""}`}>
      <Header isLight={isLight} setIsLight={setIsLight} />
      <Slider setIsLight={setIsLight} isLight={isLight} />
      <Gallery />
      <footer>
        <span>
          developed by{" "}
          <a href='https://www.linkedin.com/in/valerii-lozghachov/' target='_blank'>
            v.lozghachov
          </a>{" "}
          | 2022
        </span>
      </footer>
    </div>
  );
}

export default App;
