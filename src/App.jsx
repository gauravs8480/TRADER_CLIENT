import React from "react";
import HeroSection from "./components/HeroSection";
import BrandsAndCertificates from "./components/BrandAndCertificates";
import Certificates from "./components/Certificates";
import CourseIntro from "./components/CourseIntro";
import Mentor from "./components/Mentor";
import CourseCompletionCertificate from "./components/CourseCompletionCertificate";
import LayoutWrapper from "./uti/LayoutWrapper"; // Adjust path

const App = () => {
  return (
    <div className="bg-black text-white px-4 min-h-screen ml-0">

        <HeroSection />

      <LayoutWrapper>
        <BrandsAndCertificates />
      </LayoutWrapper>
      <LayoutWrapper>
        <Certificates />
      </LayoutWrapper>
      <LayoutWrapper>
        <CourseIntro />
      </LayoutWrapper>
      <LayoutWrapper>
        <Mentor />
      </LayoutWrapper>
      <LayoutWrapper>
        <CourseCompletionCertificate />
      </LayoutWrapper>
    </div>
  );
};

export default App;