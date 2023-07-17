import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        As a seasoned former global performer with STOMP, I thrive in innovative and collaborative problem-solving. 
        With a strong focus on driving business-oriented results to technical challenges, I am dedicated to delivering 
        efficient and secure product solutions, whether as a Platform Engineer or a Software Developer.
      </motion.p>
    </>
  )
}

export default About