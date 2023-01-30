import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "../ImageComponent/Image";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
type Props = {};

const About = (props: Props) => {
  return (
    <div className="h-full relative">
      <div className="pt-[90px]">
        <h4 className="text-center text-3xl text-slate-50 tracking-widest hover-underline-animation font-semibold cursor-pointer px-96">
          Ποίοι Είμαστε
        </h4>
        <h5 className="px-96 mt-12 text-xl text-center text-slate-50  tracking-wider">
          Με την Olympic Join Hellas επιθυμούμε να σας γνωρίσουμε την εταιρεία
          μας η οποία λειτουργεί από το 1978 και αναλαμβάνει επισκευές πλοίων,
          ειδικότερα δε ελασματουργικές και σωληνουργικές εργασίες, καθώς επίσης
          κατασκευή αεραγωγών, μονώσεων και λεβήτων σε όλους τους τύπους πλοίων.
        </h5>
        <h5 className="px-0 mt-24 text-xl text-center text-slate-50  tracking-wider">
          Συνεργαζόμαστε με πολλές Ναυτιλιακές Εταιρείες και οι εργασίες μας
          διακρίθηκαν για την ποιότητα, τον γρήγορο χρόνο παράδοσης και το
          χαμηλό κόστος.
        </h5>
      </div>
      <div className="bottom-12 absolute w-screen px-12 flex flex-row justify-center items-center">
        <i className="review-swiper-button-prev border-2 rounded-full mr-2 text-white cursor-pointer">
          <AiOutlineArrowLeft size={32} />
        </i>

        <Swiper
          spaceBetween={4}
          slidesPerView={4}
          style={{ margin: 0 }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".review-swiper-button-next",
            prevEl: ".review-swiper-button-prev",
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mx-32 px-32"
        >
          <SwiperSlide className="mr-0">
            <Image url="./image1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./image5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Image url="./imag6.jpg" />
          </SwiperSlide>
        </Swiper>
        <i className="review-swiper-button-next border-2 rounded-full ml-2 text-white cursor-pointer">
          <AiOutlineArrowRight size={32} />
        </i>
      </div>
    </div>
  );
};

export default About;
