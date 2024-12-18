import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useState } from "react";

const Testimonials = () => {
  const { Education } = content; // Updated to use Education data
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Education.title} {/* Updated Title */}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Education.subtitle} {/* Updated Subtitle */}
        </h4>
        <br />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          data-aos="fade-up"
          loop={true}
          spaceBetween={40}
          slidesPerView={1.7}
          onSlideChange={(e) => {
            setActiveIndex(e.realIndex);
          }}
          modules={[Pagination]}
          className="md:h-96 h-[40rem] max-w-3xl"
        >
          {Education.education_content.map((content, i) => (
            <SwiperSlide key={i}>
              <div
                className={` duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                ${activeIndex !== i && "scale-75 blur-sm"}`}
              >
                <img src={content.img} alt="..." className="h-24" />
                <div>
                  <h5 className="font-bold">{content.education}</h5>{" "}
                  {/* Education Name */}
                  <p className="sm:text-base text-sm">
                    Course: {content.course}
                  </p>{" "}
                  {/* Course */}
                  <p className="sm:text-base text-sm">
                    College: {content.college}
                  </p>{" "}
                  {/* College/University */}
                  <p className="sm:text-base text-sm">
                    CGPA/Percentage: {content.cgpa}
                  </p>{" "}
                  {/* CGPA/Percentage */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
