import React from "react";
import { HeroImage, Circle } from "../../assets/images";
import { useAppContext } from "../../context/AppContext";
import { Button } from "../../ui";

const Hero = () => {
  const { openModal } = useAppContext();

  return (
    <section id="hero">
      <div className="xl:pt-[49px] pt-10 xl:pb-[72px] pb-10 xl:px-[60px] px-4 flex md:flex-row flex-col items-center md:gap-[96px] gap-6">
        {/* caption */}
        <div className="flex flex-col md:text-left sm:text-center text-left xl:space-y-0 space-y-2">
          <span className="xl:text-xl md:text-lg text-sm font-secondary font-normal text-secondary lg:leading-[26px] uppercase">
            Measuring What Matters
          </span>
          <h1 className="xl:text-[62px] md:text-4xl text-[28px] font-primary font-bold xl:leading-[89.08px] md:leading-[70px] leading-[36.68px] uppercase text-white">
            Empowering Parent-Academy Partnership
          </h1>
          <p className="xl:text-lg md:text-base text-sm font-secondary font-light text-grey">
            Bridging the gap between parental expectations and academy
            offerings.
          </p>
          {/* start trial button */}
          <div>
            <Button
              onClick={() => openModal()}
              rounded="xl"
              className="xl:mt-9 mt-6"
            >
              START FREE TRIAL
            </Button>
          </div>
        </div>
        {/* hero image */}
        <div className="xl:min-w-[464px] lg:min-w-[364px] min-w-[300px] relative">
          <img src={HeroImage} alt="" className="sm:h-auto h-[437px]" />
          {/* graphic circle */}
          <img
            src={Circle}
            alt=""
            className="absolute z-10 bottom-[95px] -left-[52px] sm:block hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
