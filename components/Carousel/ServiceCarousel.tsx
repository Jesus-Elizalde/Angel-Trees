import Image from "next/image";
import React from "react";

const ServiceCarousel = () => {
  return (
    <div className="lg:flex lg:justify-center lg:gap-12 carousel carousel-center w-full space-x-4 ">
      <div className="flex flex-col items-center carousel-item">
        <Image
          src="/images/chainsaw.jpg"
          alt="A tree with an orange mark"
          width={90}
          height={90}
          className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
        />
        <h1 className="lg:text-2xl font-bold text-center text-neutral-content font my-4">
          Tree Services
        </h1>
        <div className="text-neutral-content">
          <p className="text-sm">Tree Removal</p>
          <p className="text-sm">Tree Trimming</p>
          <p className="text-sm">Stump Grinding</p>
          <p className="text-sm">Tree Pruning</p>
          <p className="text-sm">Tree Planting</p>
          <p className="text-sm">Tree Cabling</p>
        </div>
      </div>
      <div className="flex flex-col items-center carousel-item">
        <Image
          src="/images/chainsaw.jpg"
          alt="A tree with an orange mark"
          width={90}
          height={90}
          className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
        />
        <h1 className="lg:text-2xl font-bold text-center text-neutral-content font my-4">
          Landscaping Services
        </h1>
        <div className="text-neutral-content">
          <p className="text-sm">Lawn Maintenance</p>
          <p className="text-sm">Planting and Pruning</p>
          <p className="text-sm">Irrigation</p>
          <p className="text-sm">Fertilization</p>
        </div>
      </div>
      <div className="flex flex-col items-center carousel-item">
        <Image
          src="/images/chainsaw.jpg"
          alt="A tree with an orange mark"
          width={90}
          height={90}
          className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
        />
        <h1 className="lg:text-2xl font-bold text-center text-neutral-content font my-4">
          Concrete Services
        </h1>
        <div className="text-neutral-content">
          <p className="text-sm">Concreate Installation</p>
          <p className="text-sm">Concrete Repair</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
