import { ContactUsSection, NavBar } from "@/components";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex mt-9 lg:mt-40 justify-center gap-12 lg:gap-28 mb-auto flex-col lg:flex-row">
        <div className="text-neutral-content flex flex-col gap-10 lg:gap-24">
          <h1 className="text-3xl lg:text-5xl uppercase">Contact</h1>
          <div className="flex flex-col lg:gap-3 gap-6">
            <div className="flex gap-3">
              <Image
                src="/svgs/phone-icon.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <p>+650 320 3234</p>
            </div>
            <div className="flex gap-3">
              <Image
                src="/svgs/location-icon.svg"
                alt="phone"
                width={20}
                height={20}
              />
              <div>
                <p>3209 Street St,</p>
                <p>California, 94303</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-96 h-96 bg-primary rounded-md"></div>
        </div>
      </div>
      <div>
        <ContactUsSection />
      </div>
    </div>
  );
};

export default page;
