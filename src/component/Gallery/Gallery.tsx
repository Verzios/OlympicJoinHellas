import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Gallery.css";
import { GrFormNext } from "react-icons/gr";
import { ImageModal } from "../Modal/ImageModal";
import { calcLength, motion } from "framer-motion";

type Props = {
  title: string;
  images: Array<string>;
};
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    >
      <GrFormNext color="#326da8" />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "block" }}
    ></div>
  );
}
const modal = {
  hidden: {
    y: "100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, type: "linear", y: { duration: 0.5 } },
  },
  exit: {
    y: "200vh",
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
export const Gallery = ({ title, images }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [activeImage, setActiveImage] = React.useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
    slidesPerRow: 1,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    appendDots: (dots: any) => (
      <div
        className="absolute"
        style={{
          borderRadius: "10px",
          marginTop: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="relative top-0 left-0">
      <ImageModal
        activeImage={activeImage}
        images={images}
        open={open}
        setOpen={setOpen}
      />
      <div className="absolute top-48 flex flex-col justify-center items-center text-center w-full">
        <div>
          <h1 className="text-2xl border-2 border-[#326da8] p-2 text-[#326da8] cursor-pointer hover:bg-[#326da8] hover:text-slate-50 duration-500 transition-all rounded-lg">
            {title}
          </h1>
        </div>
      </div>
      <div className=" absolute top-72 w-full px-48">
        <Slider {...settings}>
          {images.map((image) => {
            return (
              <div>
                <div
                  className="h-[300px]  p-1 rounded-lg cursor-pointer"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  onClick={() => {
                    setActiveImage(image);
                    setOpen(true);
                  }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
