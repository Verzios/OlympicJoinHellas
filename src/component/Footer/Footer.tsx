import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFax } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col  bottom-0">
      <div className=" bg-zinc-800 py-4">
        <div className="grid lg:grid-cols-4 items-start justify-between lg:px-24  px-12 gap-4">
          <div className=" mt-4">
            <h3 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              ΣΧΕΤΙΚΑ ΜΕ ΕΜΑΣ
            </h3>
            <p className="text-gray-200 text-justify">
              Με την Olympic Join Hellas επιθυμούμε να σας γνωρίσουμε την
              εταιρεία μας η οποία λειτουργεί από το 1978 και αναλαμβάνει
              επισκευές πλοίων, ειδικότερα δε ελασματουργικές και σωληνουργικές
              εργασίες, καθώς επίσης κατασκευή αεραγωγών, μονώσεων και λεβήτων
              σε όλους τους τύπους πλοίων.
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              ΜENOY
            </h2>
            <ul className="text-gray-200 list-disc text-center space-y-4 ">
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  ΑΡΧΙΚΗ
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Σχετικά με εμάς
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Υπηρεσίες
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Επικοινωνία
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              ΥΠΗΡΕΣΙΕΣ
            </h2>
            <ul className="text-gray-200 list-disc text-center space-y-4">
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Σωληνουργικές εργασίες
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Επισκευές Boiler - Λέβητες (Καζάνια)
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Εξαερισμός
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Μονώσεις πλοίων
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Επισκευές Inert Gas Generator
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="hover:text-[#326da8]/80 transition-all duration-300"
                >
                  Ειδικές Κατασκευές
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-center text-2xl mt-2 text-gray-200 mb-4">
              ΕΠΙΚΟΙΝΩΝΙΑ
            </h3>
            <ul className="text-gray-200 list-none text-center space-y-4">
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <BsFillTelephoneFill color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082170</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <BsFillTelephoneFill color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082167</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <FaFax color="#326da8" />
                <h4 className="text-slate-50">(+30) 210 4082171</h4>
              </div>
              <div className="flex flex-row justify-center items-center mt-2 space-x-2">
                <MdEmail color="#326da8" />
                <h4 className="text-slate-50">olympicjoin@gmail.com</h4>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-zinc-900">
        <h3 className="text-center text-gray-100">All rights reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
