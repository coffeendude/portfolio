import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#75cf66]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={styles.heroHeadText}><span className="bg-slate-700 bg-opacity-10 px-2 py-1 rounded-xl">Hi, <span className='text-[#06d6b3]'>I'm</span> <span className="text-[#fbdf3a]">Andrew</span></span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#d8d0df]`}>I'm a Platform and Software Engineer
          </p>
        </div>
      </div>

        <div className="relative xs:w-auto sm:w-[80%]  max-xs:h-[35%]  sm:h-[60%] max-xs:mt-[30%] max-xs:ml-2 xs:ml-1 xs:mt-[30%] sm:mt-auto ml-40 rounded-md">
          <ComputersCanvas />
        </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full max-xs:hidden md:flex justify-center items-center ">
        <a href="#about">
          <div className="w-[35px] h-[64px] mb-[-24px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

    </section>

  )
}

export default Hero