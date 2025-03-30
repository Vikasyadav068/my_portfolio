import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import profile from "../assets/vikas.png";
import { useEffect, useState } from "react";

const Hero = () => {
  const [vikasText, setVikasText] = useState("");
  const [roleText, setRoleText] = useState("");
  const [phase, setPhase] = useState("typing-name");
  
  const fullVikas = "Vikas";
  const fullRole = "Web & Android Developer || UI/UX Designer.";

  useEffect(() => {
    let timeout;
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseDuration = 2000;

    if (phase === "typing-name") {
      if (vikasText.length < fullVikas.length) {
        timeout = setTimeout(() => {
          setVikasText(fullVikas.substring(0, vikasText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("typing-role"), pauseDuration/2);
      }
    } 
    else if (phase === "typing-role") {
      if (roleText.length < fullRole.length) {
        timeout = setTimeout(() => {
          setRoleText(fullRole.substring(0, roleText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setPhase("deleting"), pauseDuration);
      }
    }
    else if (phase === "deleting") {
      if (roleText.length > 0) {
        timeout = setTimeout(() => {
          setRoleText(roleText.substring(0, roleText.length - 1));
        }, deletingSpeed);
      } else if (vikasText.length > 0) {
        timeout = setTimeout(() => {
          setVikasText(vikasText.substring(0, vikasText.length - 1));
        }, deletingSpeed);
      } else {
        setPhase("typing-name");
      }
    }

    return () => clearTimeout(timeout);
  }, [vikasText, roleText, phase]);

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
          {/* Name Text - "Hi, I'm" is always static white, only "Vikas" animates */}
          <div className="flex items-center gap-4">
            <h1 className="text-[48px] font-extrabold text-white custom-text-size">
              Hi, I'm <span className="text-[#915eff]">{vikasText}</span>
            </h1>
            {vikasText.length > 0 && (
              <img 
                src={profile} 
                alt="Vikas Profile" 
                className="w-20 h-20 rounded-full border-4 border-[#915eff]"
              />
            )}
          </div>
          
          {/* Role Text */}
          <p className="text-[16px] mt-2 text-white-100">
            {roleText}
          </p>
        </div>
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
        @media (max-width: 400px) {
          .custom-text-size {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;