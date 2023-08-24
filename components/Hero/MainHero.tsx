import Image from "next/image";
import React from "react";

const MainHero = () => {
  return (
    <div className="hero bg-primary w-[80%] h-[714px] rounded-tl-3xl rounded-bl-3xl absolute right-0 mt-7">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-9xl text-neutral-content">
            Angel Garcia Tree Services
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card flex-shrink-0 w-full max-w-sm  ">
          <div>
            <Image
              src="/images/marked-tree.jpg"
              alt="A tree with an orange mark"
              width={204}
              height={204}
              className="aspect-square object-cover rounded-[42px] ml-36"
            />
            <Image
              src="/images/chainsaw.jpg"
              alt="A tree with an orange mark"
              width={204}
              height={204}
              className="aspect-square object-cover rounded-[42px] mt-3 mb-3"
            />
            <Image
              src="/images/tree-picture.jpg"
              alt="A tree with an orange mark"
              width={204}
              height={204}
              className="aspect-square object-cover rounded-[42px] ml-24"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
