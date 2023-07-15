import { motion } from 'framer-motion';

import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#1e]"/>
          <div className="w-1 sm:h-80 h-40 green-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-[#f3f3f3]`}>Hi, <span className='text-[#76ffdb]'>I'm</span> <span className="text-[#fded8f]">Andrew</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a Platform and Software Engineer
          </p>
        </div>
      </div>
      <div className="w-[60%] h-80 ml-40 rounded-sm">
        <ComputersCanvas />
      </div>
    </section>

  )
}

export default Hero