import React from "react";
import Navbari from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./About/about";
import Section from "./Section/Section";
import { useContext } from "react";
import { themeContext } from "./components/Context/Context";
import { AppDiv } from "./stayled";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <AppDiv
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Router>
          <Navbari />
          <About />
          <Section />
          <Footer />
        </Router>
      </AppDiv>
    </>
  );
}

export default App;
