import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What i have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>
      <div className="flex mt-20 flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-28 h-28" key={technology.name}>
            <Tilt className="">
              <motion.div
                variants={fadeIn("right", "spring", index * 0.15, 0, 75)}
                className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
              >
                <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className="bg-tertiary rounded-[20px] py-5 p flex justify-evenly items-center flex-col"
                >
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </motion.div>
            </Tilt>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
