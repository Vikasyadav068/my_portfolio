import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profile from "../assets/vikas.png"; // ✅ Profile image import

const Hero = () => {
  return (
    <section className="relative max-w-7xl w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-x-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-[#915eff] w-5 h-5 rounded-full" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col items-start gap-2">
          {/* Name Text with Custom Class for Responsive Size */}
          <h1 className="text-[48px] font-extrabold text-white custom-text-size">
            Hi, I'm <span className="text-[#915eff]">Vikas</span>
          </h1>
          {/* Smaller Web & Android Developer Text */}
          <p className="text-[16px] mt-2 text-white-100">
            Web & Android Developer || <br className="sm:block hidden" />
            UI/UX Designer.
          </p>
        </div>

        {/* Profile Image */}
        <img 
          src={profile} 
          alt="Vikas Profile" 
          className="w-20 h-20 rounded-full border-4 border-[#915eff]" // Profile Image
        />
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 700px) {
          .custom-text-size {
            font-size: 28px; /* Reduced size by 20px from 48px */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;