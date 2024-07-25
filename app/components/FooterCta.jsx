import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";

const FooterCta = () => {
  return (
    <section className="h-screen w-full flex items-center flex-col justify-center gap-8 px-5 bg-[#ffda79]">
      <h1 className="lg:text-7xl text-5xl font-serif text-center w-[90%] lg:w-[40%]">
        Lorem ipsum dolor sit.
      </h1>
      <p className="text-lg text-center lg:w-[50%] w-[90%]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
        expedita delectus culpa sapiente deserunt nam aliquid eius cupiditate ea
        voluptatibus?
      </p>
      <div className="flex gap-3">
        <CustomButton
          text={"Get Started Now"}
          color={"primary"}
          size="lg"
          radius="full"
        />
        <CustomButton
          text={"Learn about hiring"}
          color={"secondary"}
          size="lg"
          radius="full"
        />
      </div>
      <p className="text-xl">
        Are you designer?{" "}
        <span>
          <Link href={"/"} className="underline">
            Join Dribble
          </Link>
        </span>
      </p>
    </section>
  );
};

export default FooterCta;
