import React from "react";

const MainHero = () => {
  return (
    <div className="hero bg-green-950 w-[80%] rounded-tl-3xl rounded-bl-3xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Angel Garcia Tree Services</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card flex-shrink-0 w-full max-w-sm  ">
          <div>
            <div className="w-24 h-24 bg-white">Image holder</div>
            <div className="w-24 h-24 bg-white">Image holder</div>
            <div className="w-24 h-24 bg-white">Image holder</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHero;
