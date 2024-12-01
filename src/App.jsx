import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home/Home';
import Projects from "./Components/Projects";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Chat from "./Components/Chat";
import RotateSkills from "./Components/3D skills/RotateSkills";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Navbar />
          <Home/>
          <RotateSkills/>
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
