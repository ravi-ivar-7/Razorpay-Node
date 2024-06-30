// src/pages/HomePage.js
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import useToast from "../hooks/useToast";

const HomePage = () => {
  const { showSuccessToast, showErrorToast, showInfoToast, showWarningToast, dismissToast } = useToast();

  useEffect(() => {
    const options = {
      duration: 4000,
      position: "top-right",
    };

    // Show a success toast and log its ID
    const toastId = showSuccessToast("Welcome", options);
    console.log("Toast ID:", toastId);

    // Example of showing different types of toasts
    showErrorToast("Error message");
    showInfoToast("Info message");
    showWarningToast("Warning message");

    // Example of dismissing the toast after some time
    setTimeout(() => {
      dismissToast(toastId);
    }, 3000);
  }, [showSuccessToast, showErrorToast, showInfoToast, showWarningToast, dismissToast]);

  return (
    <div>
      <Navbar />
      <Intro />
    </div>
  );
};

export default HomePage;
