import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { stomp_hs2, stomp_hs1, stomp_hs } from '../assets';
import bg_smoke from '../assets/video/bg_smoke.mp4';
import sample_vid_a from '../assets/video/sample_vid_a.mp4';
import sample_vid_b from '../assets/video/sample_vid_b.mp4';
import sample_vid_c from '../assets/video/sample_vid_c.mp4';

const ServiceCard = ({ index, title, icon, targetId }) => {
  // const handleClick = () => {
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     // Use scrollIntoView for a simple, smooth scroll
  //     targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //   } else {
  //     console.error(`Element with ID ${targetId} not found.`);
  //   }
  // };
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Calculate the element's position with a custom offset
      const yOffset = -200; // Adjust this value for your header height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  };
  

  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={handleClick}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionOVText}>Overview</h2>
      </div>

      <motion.div
        id="about" 
        variants={textVariant()}
        className="relative overflow-hidden min-h-screen flex flex-col items-start justify-start bg-black scroll-mt-[200px] pt-20"
      >
        <video
          className="absolute top-0 left-[calc(50%-50vw)] w-[100vw] h-full object-cover object-center video-bg"
          src={bg_smoke}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="flex flex-col items-center relative z-10 text-center">
          <div className="w-full">
            <video
              className="w-full md:w-1/2 h-auto object-cover rounded-xl mask-fade-2 mx-auto"
              src={sample_vid_a}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="flex flex-col md:flex-row w-full mt-4 space-y-4 md:space-y-0 md:space-x-4">
            <video
              className="w-full md:w-1/2 h-auto object-cover rounded-xl mask-fade-2"
              src={sample_vid_c}
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="w-full md:w-1/2 h-auto object-cover rounded-xl mask-fade-2"
              src={sample_vid_b}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-[#d8d0df] text-[17px] max-w-3xl leading-[30px]">
        A seasoned former cast member of <span className='text-[#ef1c26] font-bold'><a href='https://stomponline.com/'>STOMP</a></span>, <span className='text-[#fbb02f] font-bold tracking-[0.2em]'><a href='https://blasttheshow.com/'>Bl<span className='text-white font-bold tracking-[0.2em]'>a</span>st!</a></span>, and more I thrive in innovative and collaborative environments as a problem-solver. 
        I combine a passion for storytelling with technical expertise to transform complex challenges into business-driven solutions, bringing creativity and excelling in roles such as Solutions Architect, Platform Engineer, and Software Engineer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
