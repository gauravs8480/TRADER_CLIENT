import React from 'react'
import { video1 } from '../assets'
import HeroSectionWrapper from '../uti/HeroSectionWrapper'

const VideoComp = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center  ">
<HeroSectionWrapper/>


 {/* Background Video */}
 <video
          className="absolute  top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video.
        </video>



    </div>
  )
}

export default VideoComp