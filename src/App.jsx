import React from "react";
import HeroSection from "./components/HeroSection";
import BrandsAndCertificates from "./components/BrandAndCertificates";
import Certificates from "./components/Certificates";
import CourseIntro from "./components/CourseIntro";
import Mentor from "./components/Mentor";
import CourseCompletionCertificate from "./components/CourseCompletionCertificate";
import LayoutWrapper from "./uti/LayoutWrapper"; // Adjust path
import HeroSectionWrapper from "./uti/HeroSectionWrapper";
import VideoComp from "./components/VideoComp";
import DiscordIntro from "./components/DiscordIntro";

const App = () => {
  return (
    <div className="">
<VideoComp/>

  

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


<DiscordIntro/>





    </div>
  );
};

export default App;