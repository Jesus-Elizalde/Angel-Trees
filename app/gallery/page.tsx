import {
  ContactUsSection,
  NavBar,
  ServiceCarousel,
  WorkCarousel,
} from "@/components";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
          Our Work
        </h1>
        <WorkCarousel />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
          Services We Provide
        </h1>
        <ServiceCarousel />
      </div>
      <div>
        <ContactUsSection />
      </div>
    </div>
  );
};

export default page;
