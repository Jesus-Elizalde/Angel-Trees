import {
  AboutUsHero,
  AdvantagesSection,
  MainHero,
  NavBar,
  ServiceCarousel,
  WorkCarousel,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar>
        <div className="flex h-[550px] lg:h-[1050px]">
          <MainHero />
          <Image
            src="/images/bush.jpg"
            alt=" "
            width={803}
            height={1020}
            className="absolute object-cover w-3/4 h-[36rem] lg:w-1/2 lg:h-[1020px] -z-10 top-0 opacity-80"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
            Services We Provide
          </h1>
          <ServiceCarousel />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
            Our Work
          </h1>
          <WorkCarousel />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-10 ">
            Advantages Working With Us
          </h1>
          <AdvantagesSection />
        </div>
        <div>
          <AboutUsHero />
        </div>
        <div>
          <div className="flex flex-col w-full my-4">
            <h1 className="w-full flex  text-3xl lg:text-5xl justify-center lg:ml-36 my-4">
              Any Questions?
            </h1>
            <div className="flex flex-col-reverse lg:flex-row w-full justify-center gap-16">
              <div className="flex flex-col gap-4 lg:w-96 p-4 lg:p-0">
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered input-primary"
                />
                <input
                  type="text"
                  placeholder="Your telephone"
                  className="input input-bordered input-primary"
                />
                <textarea
                  className="textarea textarea-bordered textarea-primary "
                  placeholder="Your question"
                ></textarea>
              </div>
              <div>
                <p className="lg:w-96 text-neutral-content px-4 lg:px-0">
                  Write to us and we will be sure to answer all your questions
                  and give you a comprehensive consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
    </main>
  );
}
