import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { play } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description,tags, image, source_code_link, website_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-2 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex items-end m-3 card-img_hover flex-col">
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
              
            </div>
            <div 
              onClick={() => window.open(website_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={play}
                alt="play"
                className="w-[90%] h-[90%] object-contain"
              />
              
            </div>
          </div>

        </div>

        <div
          className="flex flex-col justify-center items-center">
          <h3 className="my-2 justify-center items-center font-bold text-[18px]">{name}</h3>
          <p className="text-sm items-center m-1">This Doom game engine, a full Python adaptation using Pygame, has been modified by me but originated from <a href><span className="font-bold">Coder</span> <span className="font-bold text-[#fd6a01]">Space's</span></a> YouTube. I used pygbag to create a WebAssembly version for browser game operation.</p>
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>My work</p> */}
        <h2 className={styles.sectionOVText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The subsequent projects exemplify my expertise and learning, each encapsulating my knack for problem-solving, proficiency in diverse technologies, as well as an understanding of technical concepts and project management.
          
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");