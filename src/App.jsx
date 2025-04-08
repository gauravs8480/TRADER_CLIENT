import React from "react";
import HeroSection from "./components/HeroSection";
import BrandsAndCertificates from "./components/BrandAndCertificates";
import Certificates from "./components/Certificates";
import CourseIntro from "./components/CourseIntro";
import Mentor from "./components/Mentor";
import CourseCompletionCertificate from "./components/CourseCompletionCertificate";

const App = () => {
  return (
    <>
      
      <HeroSection />
      <BrandsAndCertificates />
      <Certificates />
      <CourseIntro/>
      <Mentor/>
      <CourseCompletionCertificate/>
    </>
  );
};

export default App;
