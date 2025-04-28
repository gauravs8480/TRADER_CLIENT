import React from "react";

import BrandsAndCertificates from "./components/BrandAndCertificates";
import Certificates from "./components/Certificates";
import CourseIntro from "./components/CourseIntro";
import Mentor from "./components/Mentor";
import CourseCompletionCertificate from "./components/CourseCompletionCertificate";
import LayoutWrapper from "./uti/LayoutWrapper"; // Adjust path

import VideoComp from "./components/VideoComp";
import DiscordIntro from "./components/DiscordIntro";
import CourseSyllabus from "./components/CourseSyllabus";
import AfterCourseCompletion from "./components/AfterCourseCompletion";
import Subscription from "./components/Subscription";
import CourseFaq from "./components/CourseFaq";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

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

      {/* <LayoutWrapper>
        <CourseCompletionCertificate />
      </LayoutWrapper> */}


<DiscordIntro/>

{/* <LayoutWrapper>
<CourseSyllabus/>
</LayoutWrapper> */}

<LayoutWrapper>
<AfterCourseCompletion/>

</LayoutWrapper>

<LayoutWrapper>
  <Testimonials/>
</LayoutWrapper>

<LayoutWrapper>
  <Subscription/>
</LayoutWrapper>


<LayoutWrapper>

  <CourseFaq/>
</LayoutWrapper>

<Footer/>


    </div>
  );
};

export default App;