import { useEffect } from "react";
import { content } from "../Content";

const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* Background Section */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-10/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-20%] text-[#EAF2FA] text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* First Column */}
        <div
          className="pb-16 px-4 sm:px-6 pt-5 text-center md:text-left"
          data-aos="fade-down"
        >
          <h2 className="text-xl sm:text-3xl md:text-4xl">{hero.title}</h2>
          <br />
          <div className="flex justify-center md:justify-end">
            <button className="btn">{hero.btnText}</button>
          </div>
          <div className="flex flex-col gap-8 mt-10">
            {hero.hero_content.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-full sm:w-80 gap-4
            ${i === 1 && "flex-col-reverse md:flex-row-reverse md:text-right"}`}
              >
                <h3 className="text-xl sm:text-2xl">{content.count}</h3>
                <p className="text-sm sm:text-base">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column (Image) */}
        <div className="md:h-[37rem] h-64 sm:h-80 w-full md:w-auto">
          <img
            src={hero.image}
            data-aos="slide-up"
            alt="..."
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
