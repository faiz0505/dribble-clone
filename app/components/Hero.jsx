import { Chip } from "@nextui-org/react";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <header className="h-[80vh] lg:h-screen w-full flex items-center flex-col justify-center gap-10 px-5">
      <Chip className="bg-[#ffda79]" size="lg">
        <span className="font-semibold py-3">
          Over 3 million ready-to-work creatives!
        </span>
      </Chip>
      <h1 className="lg:text-7xl text-5xl font-serif text-center w-[80%] lg:w-[65%]">
        The world’s destination for design
      </h1>
      <p className="text-lg font-semibold text-center">
        Get inspired by the work of millions of top-rated designers & agencies
        around the world.
      </p>
      <CustomButton
        text={"Get Started"}
        color={"primary"}
        size="lg"
        radius="full"
      />
    </header>
  );
};

export default Hero;
