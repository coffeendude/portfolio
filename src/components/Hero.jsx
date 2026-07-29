import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import header_post_mv from '../assets/video/header_new_post_mv.mp4';

const Hero = () => {
  return (
    <>
      {/* Inline SVG for the clip path */}
      <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <clipPath id="eyeClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.5 Q0.5,-0.5 1,0.5 Q0.5,1.5 0,0.5 Z" />
          </clipPath>
        </defs>
      </svg>

      <section className="relative w-full h-screen pb-50">
        <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#75cf66]" />
            <div className="w-1 sm:h-80 h-40 green-gradient" />
          </div>
          <div>
            <h1 className={styles.heroHeadText}>
              <span className="bg-slate-700 bg-opacity-0 px-2 py-1 rounded-xl">
                Hi, <span className="text-[#06d6b3]">I'm</span> <span className="text-[#fbdf3a]">Andrew</span>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#d8d0df]`}>
              I'm a Technology Engineer with a passion for story telling
            </p>
          </div>
        </div>

        <div className="mt-[-180px] md:mt-[-80px] lg:mt-[-80px] relative xs:w-auto md:mx-auto sm:w-[80%] max-xs:h-[40%] xs:h-[50%] sm:h-[100%] lg:h-[70%] max-xs:mt-[40%] xs:mt-[30%] sm:mt-auto rounded-md mask-fade eye-mask">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover video-bg rounded-xl transform"
            src={header_post_mv}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        <div className="absolute xs:bottom-10 bottom-32 w-full max-xs:justify-end flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] mb-[-24px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1 transform translate-y-6">
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop' }}
                className="w-3 h-3 rounded-full bg-secondary mb-1 mt-3"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
