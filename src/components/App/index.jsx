import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error404 from "../pages/Error404";

import Header from "../Header";

function App() {
  const [isLight, setIsLight] = useState(false);
  return (
    <BrowserRouter>
      <div className={`app ${isLight ? "light" : ""}`}>
        <Header isLight={isLight} setIsLight={setIsLight} />

        <Routes>
          <Route path='/' element={<Home setIsLight={setIsLight} isLight={isLight} />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
