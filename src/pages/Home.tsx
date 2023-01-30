import React from "react";
import Hero from "../component/Hero/Hero";
import ModernNav from "../component/Navbar/ModernNav";
import Navbar from "../component/Navbar/Navbar";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-slate-50 relative z-0 text-gray-700 h-screen  overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#9544cf]/80">
      <Navbar />
      <section className="absolute top-0 h-screen w-screen">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
