import React from "react";
import "../About/About.css";
import { MdMiscellaneousServices, MdAir } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaGasPump } from "react-icons/fa";
import { GiTeePipe } from "react-icons/gi";
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { NavLink } from "react-router-dom";
type Props = {};
const starting = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "linear",
      x: { duration: 0.4 },
      opacity: { duration: 1 },
    },
  },
  hover: {
    backgroundColor: "#326da8",
    scale: 1.2,
    transition: { delay: 0.1, type: "linear", scale: { duration: 0.4 } },
  },
};
const startingLeft = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1,
      type: "linear",
      x: { duration: 0.4 },
      opacity: { duration: 1 },
    },
  },
  hover: {
    backgroundColor: "#326da8",
    scale: 1.2,
    transition: { delay: 0.1, type: "linear", scale: { duration: 0.4 } },
  },
};
const Services = (props: Props) => {
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center text-3xl text-slate-800 tracking-widest hover-underline-animation font-semibold cursor-pointer px-96">
          Yπηρεσίες
        </h4>
        <div className="w-screen grid grid-cols-6 gap-12 px-0 mt-48 relative justify-center items-center h-full space-x-12">
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <GiTeePipe
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  Σωληνουργικές εργασίες
                </h4>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center absolute top-24 space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <AiTwotoneMedicineBox
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  Επισκευές Boiler - Λέβητες (Καζάνια)
                </h4>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center top-48 absolute space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={startingLeft}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <MdAir
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">Εξαερισμός</h4>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center top-48 absolute space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <FaShip
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  Μονώσεις πλοίων
                </h4>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center top-24 absolute space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <FaGasPump
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  Επισκευές Inert Gas Generator
                </h4>
              </div>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink
              to="/"
              className="flex flex-col justify-center items-center space-y-4"
            >
              <motion.div
                className="border-2 rounded-full p-3 border-[#326da8]"
                variants={starting}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
              >
                <MdMiscellaneousServices
                  size={48}
                  className="text-[#326da8] hover:text-slate-50 transition-colors duration-500"
                />
              </motion.div>
              <div>
                <h4 className="font-semibold tracking-wider">
                  Ειδικές Κατασκευές
                </h4>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
