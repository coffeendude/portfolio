import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils';

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}>Introduction</p>
        <h2>Overview.</h2>
      </motion.div>
    </>
  )
}

export default About