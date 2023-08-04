// import { useState } from "react";
import Bubbles from "./assets/Bubbles";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import NavBar from "./components/NavBar";
import RightSection from "./components/RightSection";

function App() {
  return (
    <>
      <Bubbles />

      <div className="container">
        <NavBar />
        <div className="main">
          <Header />
          <section className="maincontent">
            <LeftSection />
            <RightSection />
            <div className="maincontent__right"></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
