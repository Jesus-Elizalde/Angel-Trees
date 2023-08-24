import Image from "next/image";
import React from "react";

const WorkCarousel = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="carousel w-3/4 rounded-3xl ">
          <div id="item1" className="carousel-item w-full">
            <Image
              src="/images/marked-tree.jpg"
              alt=" "
              width={803}
              height={1020}
              className="object-cover w-full lg:h-[650px]"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
              src="/images/bush.jpg"
              alt=" "
              width={803}
              height={1020}
              className="object-cover w-full lg:h-[650px]"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              src="/images/chainsaw.jpg"
              alt=" "
              width={803}
              height={1020}
              className="object-cover w-full lg:h-[650px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs rounded-btn">
          1
        </a>
        <a href="#item2" className="btn btn-xs rounded-btn">
          2
        </a>
        <a href="#item3" className="btn btn-xs rounded-btn">
          3
        </a>
      </div>
    </>
  );
};

export default WorkCarousel;
