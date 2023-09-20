import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { Cursor } from "react-simple-typewriter";
import "./Links.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
type Props = {};
const starting = {
  hidden: {
    y: "50vw",
  },
  visible: {
    y: 0,
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.4 } },
  },
  hover: {
    backgroundColor: "#326da8",
    y: 20,
    transition: { delay: 0.1, type: "linear", y: { duration: 0.4 } },
  },
};
const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Καλώς ήρθατε στην Olympic Join Hellas",
      "Σωληνουργικές εργασίες",
      "Επισκευές Boiler - Λέβητες (Καζάνια)",
      "Επισκευές Inert Gas Generator",
      "Μονώσεις πλοίων",
      "Εξαερισμός",
      "Ειδικές Κατασκευές",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col justify-center items-center h-full ">
      {" "}
      <h1 className="text-3xl lg:text-start text-center lg:text-6xl font-semibold lg:px-10">
        <span className="text-slate-600 tracking-wider">{text}</span>
        <Cursor cursorColor="#326da8" />
      </h1>
      <div className="lg:flex hidden flex-row bottom-32 absolute justify-between lg:w-1/2 tracking-wide font-semibold ">
        <h4 className="cursor-pointer hover-underline-animation">ΑΡΧΙΚΗ</h4>
        <a className="cursor-pointer hover-underline-animation" href="#about">
          ΠΟΙΟΙ ΕΙΜΑΣΤΕ
        </a>
        <a
          className="cursor-pointer hover-underline-animation"
          href="#services"
        >
          ΥΠΗΡΕΣΙΕΣ
        </a>
        <a className="cursor-pointer hover-underline-animation" href="#contact">
          ΕΠΙΚΟΙΝΩΝΙΑ
        </a>
      </div>
      <div className="absolute bottom-12">
        <a href="#about">
          <motion.button
            className="border-[#326da8] border-2 rounded-full p-1"
            variants={starting}
            initial="hidden"
            animate="visible"
            exit="exit"
            whileHover="hover"
          >
            <AiOutlineArrowDown
              size={32}
              className="text-[#326da8] hover:text-slate-50 transition-all duration-500"
            />
          </motion.button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
