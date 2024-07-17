import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Chat from "./Components/Chat";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Home/>
          <Skills/>
          <Certificates/>
          <Projects/>
          <Chat/>
          <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
