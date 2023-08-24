import Image from "next/image";
import React from "react";

const AboutUsHero = () => {
  return (
    <div className="flex w-[90%] bg-primary  rounded-tr-3xl rounded-br-3xl  flex-col mt-14">
      <h1 className="text-3xl lg:text-9xl font-bold ml-32 lg:ml-60 text-neutral-content capitalize mt-10">
        About Us
      </h1>
      <div className="flex lg:items-start lg:justify-center lg:flex-row flex-col">
        <p className="w-[20rem] lg:w-[35rem] lg:text-xl mt-10 ml-5">
          <span className="font-bold">At Angels Garcia Tree Services</span> -
          with a decade of dedicated experience, we are your partners in
          exceptional tree care. Our certified arborists and skilled
          professionals bring expertise and passion to every project. Committed
          to safety and innovation, we deliver unparalleled workmanship,
          enhancing the beauty and health of your trees and landsdapes. As
          stewards of the environment, we take pride in contributing to our
          community. Choose Angels Garcia Tree Services as your trusted tree
          care partner, and let's nurture a greener future together.
        </p>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex lg:flex-col ml-5">
          <Image
            src="/images/marked-tree.jpg"
            alt="A tree with an orange mark"
            width={90}
            height={90}
            className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:ml-36 lg:w-[204px] lg:h-[204px]"
          />
          <Image
            src="/images/chainsaw.jpg"
            alt="A tree with an orange mark"
            width={90}
            height={90}
            className="aspect-square object-cover rounded-xl mr-3 ml-3 lg:rounded-[42px] lg:mt-3 lg:mb-3 lg:w-[204px] lg:h-[204px]"
          />
          <Image
            src="/images/chainsaw.jpg"
            alt="A tree with an orange mark"
            width={90}
            height={90}
            className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:ml-24 lg:w-[204px] lg:h-[204px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
