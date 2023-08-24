import Image from "next/image";
import React from "react";

const MainHero = () => {
  return (
    <div className="hero bg-primary w-[80%] h-72 lg:h-[714px] rounded-tl-3xl rounded-bl-3xl absolute right-0 mt-7">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="font-bold lg:text-9xl text-neutral-content text-3xl">
            Angel Garcia Tree Services
          </h1>
          <p className="py-6 text-sm">
            Rooted in Excellence. Your trusted Partner for Tree Services and
            more. With over 20 years of experience, we bring unmatched expertise
            to every project. From tree care to beyond, discover the difference
            of our exceptional workmanship.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card flex-shrink-0 w-full max-w-sm flex flex-row lg:flex-col ">
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

export default MainHero;
