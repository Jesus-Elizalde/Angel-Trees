import {
  AboutUsHero,
  ContactUsSection,
  NavBar,
  WorkCarousel,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <AboutUsHero />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
          Our Work
        </h1>
        <WorkCarousel />
      </div>
      <div>
        <ContactUsSection />
      </div>
    </div>
  );
};

export default page;
