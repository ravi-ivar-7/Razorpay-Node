// src/pages/HomePage.js
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import useToast from "../hooks/useToast";

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
};

export default HomePage;
