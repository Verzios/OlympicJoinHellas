import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./PhoneNavbar.css";

import { NavLink } from "react-router-dom";

type Props = {};
const starting = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.1, type: "linear", opacity: { duration: 1 } },
  },
  exit: {
    opacity: 0,
    transition: { delay: 0.1, type: "linear", opacity: { duration: 1.4 } },
  },
};
const variantMenu = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
  exit: {
    y: "-100vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 1 } },
  },
};

const variantImage3 = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 1 } },
  },
};
const row1 = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.5 } },
  },
  exit: {
    y: "-200vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 0.5 } },
  },
  hover: {
    rotateY: 180,
    transition: {
      delay: 0.1,
      ease: "easeInOutCubicBezier",
      rotateY: { duration: 1 },
    },
  },
};
const row2Left = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
};
const row2Right = {
  hidden: {
    x: "50vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "200vh",
    opacity: 0,
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
};
const row3Left = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "-200vh",
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
};
const row3Center = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 1.5 } },
  },
  exit: {
    y: "200vh",
    transition: { delay: 0.1, type: "linear", y: { duration: 0.5 } },
  },
};
const row3Right = {
  hidden: {
    x: "100vh",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", x: { duration: 1.5 } },
  },
  exit: {
    x: "200vh",
    opacity: 0,
    transition: { delay: 0.1, type: "linear", x: { duration: 0.5 } },
  },
};
const ModernNav = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative z-30 ">
      <motion.button
        className=" fixed z-40 top-8 right-[17px]  space-y-1   items-center justify-center px-4 py-3 rounded-tl-sm rounded-bl-sm"
        onClick={() => setIsOpen(!isOpen)}
        style={{ backgroundColor: "#326da8" }}
        initial={false}
      >
        <motion.div
          className="hamburger--top h-12"
          animate={{
            y: isOpen ? 6 : 0,
            rotate: isOpen ? 60 : 0,
          }}
          transition={{
            delay: 0.1,
            y: { duration: 0.1 },
            rotate: { duration: 0.5 },
            default: { ease: "linear" },
          }}
        ></motion.div>
        <motion.div
          className="hamburger--middle"
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            delay: 0.1,
            opacity: { duration: 0.5 },

            default: { ease: "linear" },
          }}
        ></motion.div>
        <motion.div
          className="hamburger--bottom"
          animate={{
            y: isOpen ? -6 : 0,
            rotate: isOpen ? 120 : 0,
          }}
          transition={{
            delay: 0.1,
            y: { duration: 0.1 },
            rotate: { duration: 0.5 },
            default: { ease: "linear" },
          }}
        ></motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={` ${
              isOpen ? "fixed z-30" : "absolute z-0"
            }  top-0 right-0  w-screen h-screen grid grid-cols-3`}
            variants={starting}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div className="grid grid-cols-5 col-span-2">
              {isOpen && (
                <motion.div
                  className="bg-[#326da8] col-span-5 relative flex container justify-center items-center"
                  variants={variantImage3}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8) ),url(${"/assets/society.jpeg"}) `,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <div className="stage">
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image1.jpg')`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                        variants={row1}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        whileHover="hover"
                      ></motion.div>
                    </div>
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image2.jpg')`,
                          backgroundPosition: "center left",
                          backgroundSize: "cover",
                        }}
                        variants={row2Left}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      ></motion.div>
                      <motion.div
                        className="cell"
                        variants={row2Right}
                        style={{
                          backgroundImage: `url('/image3.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      ></motion.div>
                    </div>
                    <div className="row">
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image4.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        variants={row3Left}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      ></motion.div>
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/image5.jpg')`,
                          backgroundPosition: "center right",
                          backgroundSize: "cover",
                        }}
                        variants={row3Center}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      ></motion.div>
                      <motion.div
                        className="cell"
                        style={{
                          backgroundImage: `url('/imag6.jpg')`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                        }}
                        variants={row3Right}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      ></motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {isOpen && (
              <motion.div
                className="bg-gray-500 h-full"
                variants={variantMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="h-full flex flex-col justify-center space-y-12 items-center bg-neutral-900">
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "underline decoration-[#326da8]"
                          : "hover-underline-animation"
                      } text-[#e4e4e6] text-2xl w-1/3 text-center `
                    }
                    to="/"
                  >
                    ΑΡΧΙΚΗ
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "underline decoration-[#326da8]"
                          : "hover-underline-animation"
                      } text-[#e4e4e6] text-2xl w-2/3 text-center `
                    }
                    to="/2"
                  >
                    ΠΟΙΟΙ ΕΙΜΑΣΤΕ
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "underline decoration-[#326da8]"
                          : "hover-underline-animation"
                      } text-[#e4e4e6] text-2xl w-2/3 text-center `
                    }
                    to="/2"
                  >
                    ΥΠΗΡΕΣΙΕΣ
                  </NavLink>
                  <NavLink
                    onClick={() => setIsOpen(!isOpen)}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "underline decoration-[#326da8]"
                          : "hover-underline-animation"
                      } text-[#e4e4e6] text-2xl w-2/3 text-center `
                    }
                    to="/2"
                  >
                    ΕΠΙΚΟΙΝΩΝΙΑ
                  </NavLink>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernNav;
