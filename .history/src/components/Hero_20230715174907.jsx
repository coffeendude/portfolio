import { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  const threeDAnimation = () => {}
    if (isMobile) {
      return (
      <Fragment className='mt-[80%] ml-[-12%]'>
      <div className='mt-[80%] ml-[-12%]' style={{marginTop: '40%'}}>
        <div className="absolute w-[40%] h-[30%] mt-[80%] rounded-md">
          <ComputersCanvas />
        </div>
      </div>
      </Fragment>
      )
} : (
      <div className="absolute w-[60%] h-80 ml-40 rounded-md">
        <ComputersCanvas />
      </div>
    )
    }
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#75cf66]" />
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#cfcccc]`}>Hi, <span className='text-[#3affcb]'>I'm</span> <span className="text-[#fbdf3a]">Andrew</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-[#cfcccc]`}>I am a Platform and Software Engineer
          </p>
        </div>
      </div>

       
      
      

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
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