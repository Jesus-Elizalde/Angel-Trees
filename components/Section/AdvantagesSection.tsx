import Image from "next/image";
import React from "react";

const AdvantagesSection = () => {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row w-full justify-center gap-4">
      <Image
        src="/images/bush.jpg"
        alt=" "
        width={609}
        height={386}
        className="object-cover w-[90%] h-[20rem] lg:w-1/3 lg:h-[386px] rounded-3xl"
      />
      <div className="text-neutral-content flex flex-col justify-evenly gap-5">
        <p className="lg:text-2xl lg:w-[40rem] w-[20rem]">
          Trust in our 10+ years of industry experience to handle your tree care
          needs with expertise and precision.
        </p>
        <p className="lg:text-2xl lg:w-[40rem] w-[20rem]">
          Our skilled professionals are trained and knowledgeable in all aspects
          of tree services, ensuring your trees receive the best care possible.
        </p>
        <p className="lg:text-2xl lg:w-[40rem] w-[20rem]">
          We understand the importance of work-life balance and strive to
          accommodate flexible schedules whenever possible.
        </p>
      </div>
    </div>
  );
};

export default AdvantagesSection;
