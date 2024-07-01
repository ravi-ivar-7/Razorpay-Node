// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Common/Navbar";
import Intro from "../components/Home/Intro";
import PaymentPage from "../components/Payment/PaymentPage";

const HomePage = () => {


  return (
    <div>
      <Navbar />
      <Intro />
      <PaymentPage/>
    </div>
  );
};

export default HomePage;
