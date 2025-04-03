import React from "react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor"; // Import the Cursor component

const App = () => {
  return (
    <>
      <IntroScreen />
      <Cursor /> {/* Add Cursor Component */}
      <Navbar />
      <section id="work">
        <Work />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
