// src/pages/HomePage.js
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import useToast from "../hooks/useToast";

const HomePage = () => {
  const { showToast } = useToast();

  useEffect(() => {
    const options = {
      duration: 4000,
      position: "top-center",
      icon:"👋"
    };

    // Show a success toast and log its ID
    const toastId = showToast("Welcome", options);
    console.log("Toast ID:", toastId);

    
  }, [showToast]);

  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
};

export default HomePage;
