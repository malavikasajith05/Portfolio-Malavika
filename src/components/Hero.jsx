import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-scroll";



const Hero = () => {
  return (
    <div
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center px-4 py-28 md:px-32 "
    >
      <div className="flex flex-col items-center justify-center gap-10">
        {/* Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/image.jpg"
          alt="Malavika Sajith"
          className="w-[200px] h-[200px] cursor-pointer rounded-full shadow-xl shadow-gray-500 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-amber-900 md:w-[250px] md:h-[250px]"
        />

        {/* Name */}
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-amber-950 to-amber-700 bg-clip-text text-transparent opacity-80 text-4xl font-semibold transition-all duration-300 hover:opacity-100">
            Malavika Sajith
          </h1>
          <h3 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
            Web Developer
          </h3>

          {/* Typewriter Effect */}
          <p className="text-sm md:text-lg text-pretty text-amber-800">
            <Typewriter
              words={[
                "Welcome to my website!",
                "I build sleek, functional websites.",
                "Let’s create something amazing together!",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1000}
            />
          </p>

          {/* Download Resume Button */}
          <button
            onClick={() => window.open("/Resume_Malavika.pdf", "_blank")}
            className="mt-4 flex items-center gap-2 rounded-full bg-amber-700 px-6 py-2 text-white shadow-lg hover:bg-amber-600 hover:shadow-2xl"
          >
            <FaFileDownload className="text-lg" />
            Resume
          </button>
        </div>

        {/* Scroll Down Indicator (Clickable to scroll to the next section) */}
        <div className="mt-10">
          <Link
            to="tech"
            smooth={true}
            duration={800}
            offset={-70} // Adjust this value based on navbar height
            className="flex items-center justify-center cursor-pointer"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl text-gray-600 hover:text-amber-800 transition-all duration-300"
            >
              ↓
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;


