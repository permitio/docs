import React from "react";

import hero_image from "./assets/hero.png";

const SectionHero = () => (
  <div className="min-h-[260px] relative p-12 !-mt-[2.2rem] overflow-hidden ">
    <div className="flex items-center justify-between gap-10 container max-w-6xl">
      <div className="flex flex-col gap-3 text-[#451E11] shrink-0 relative z-20">
        <h1 className="!m-0 text-[28px] ">Welcome to Permit.io</h1>
        <p className="text-sm !leading-5">
          <span className="lg:block">
            Here you&apos;ll find comprehensive guides and resources to help{" "}
          </span>{" "}
          you get started with Permit and explore our platform.
        </p>
      </div>
      <figure className="relative">
        <img
          className="relative z-20"
          src={hero_image}
          alt="hero image"
          width={423}
          height={151}
          loading="eager"
        />
      </figure>
    </div>
    <div className="absolute inset-0 top-auto w-full h-px bg-[#D1B9B0]"></div>
  </div>
);

export default SectionHero;
