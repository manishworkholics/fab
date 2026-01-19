import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import ArrowLeftIcon from "@/components/icons/ArrowLeftIcon";
interface TestimonialProps {
  title: string;
  AiTestomonial: {
    description: string;
    image: string;
    name: string;
    company: string;
  }[];
}
const Testimonial = ({ title, AiTestomonial }: TestimonialProps) => {
  const sliderRef = useRef<Slider | null>(null); // Properly typed ref for Slider

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Move to the previous slide
  const handleLeftClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Move to the next slide
  const handleRightClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="mb-9">
      <div className="container m-auto mb-9 p-3 md:p-0">
        <div className="text-center  md:w-[70%] m-auto">
          <h2 className="text-[30px] mb-6 md:mb-0 md:text-[48px] font-bold ">{title}</h2>
        </div>
        <div className="slider_indicator flex justify-end items-center gap-2 mt-9 md:mt-0">
          {/* Custom Left Arrow */}
          <div
            className="bg-[#00163352] w-[60px] h-[60px] flex items-center justify-center rounded-[20px] cursor-pointer"
            onClick={handleLeftClick}
          >
            <ArrowLeftIcon />
          </div>
          {/* Custom Right Arrow */}
          <div
            className="bg-[#001633] w-[60px] h-[60px] flex items-center justify-center rounded-[20px] cursor-pointer"
            onClick={handleRightClick}
          >
            <ArrowRightIcon />
          </div>
        </div>
      </div>

      <div className="lg:w-[85%] ml-auto">
        {/* Slider Component */}
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {AiTestomonial.map((data, index) => (
            <div key={index}>
              <div className="bg-[#101928] rounded-lg p-9 ml-[1rem]">
                <p className="text-[18px] text-[#FEFEFE] pb-9">{data.description}</p>
                <div className="flex items-center gap-4">
                  <img src={data.image} alt="User" className="h-[48px] w-[48px] rounded-full" />
                  <div>
                    <p className="text-[14px] text-[#FEFEFE]">{data.name}</p>
                    <p className="text-[12px] text-[#6C7275]">{data.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
