import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Error404 from "../pages/Error404";

import Header from "../Header";

import styles from "./App.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
