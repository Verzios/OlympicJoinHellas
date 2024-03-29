import React from "react";
import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import ModernNav from "../component/Navbar/ModernNav";
import Navbar from "../component/Navbar/Navbar";
import Services from "../component/Services/Services";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-slate-50 lg:snap-y lg:snap-mandatory relative z-0 text-gray-700 h-screen  overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#326da8]/80">
      <Navbar />
      <section className="-mt-[100px] h-screen w-screen snap-start" id="hero">
        <Hero />
      </section>
      <section className="h-screen bg-[#326da8]/70 snap-start" id="about">
        <About />
      </section>
      <section className="h-screen snap-start" id="services">
        <Services />
      </section>
      <section
        className="2xl:h-screen lg:h-[1000px]  snap-start bg-[#326da8]/70"
        id="contact"
      >
        <Contact />
      </section>
      <section className="snap-start" id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
