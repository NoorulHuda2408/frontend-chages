import React from "react";
import Navbar from "../../components/Navbar/index";
import HeroSection from "../HeroSection.js";
// import MainloginPage from "./mainLoginPage/MainloginPage";
import Success from "../../components/Success/Success";
import TOTC from "../../components/TOTC";
import TeacherTools from "../../components/TeacherTools";
// import Assesments from "./components/Assesment";
import Assesments from "../../components/Assesment/Assesment";
import One from "../../components/One/One";
import ClassManagement from "../../components/ClassManagement/ClassManagement";
import Cloud from "../../components/Cloud/Cloud";
import Footer from "../../components/Footer/Footer";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Success />
      <Cloud />
      <TOTC />
      <TeacherTools />
      <Assesments />
      <ClassManagement />
      <One />
      <Footer />
    </>
  );
};

export default Dashboard;
