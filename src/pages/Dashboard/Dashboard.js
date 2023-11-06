import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const navigation = useNavigate();
  const userData = useSelector((state) => state?.signin?.signInData?.data);

  useEffect(() => {
    if (userData) {
      if (userData.role === 0) {
        navigation("/Searchtutor");
      } else if (userData.role === 1) {
        navigation("/Notification");
      }
    }else{
      navigation("/")
    }
  });
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
