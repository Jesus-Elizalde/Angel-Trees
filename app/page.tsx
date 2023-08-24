import { MainHero, NavBar, ServiceCarousel, WorkCarousel } from "@/components";
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
                Trust in our 10+ years of industry experience to handle your
                tree care needs with expertise and precision.
              </p>
              <p className="lg:text-2xl lg:w-[40rem] w-[20rem]">
                Our skilled professionals are trained and knowledgeable in all
                aspects of tree services, ensuring your trees receive the best
                care possible.
              </p>
              <p className="lg:text-2xl lg:w-[40rem] w-[20rem]">
                We understand the importance of work-life balance and strive to
                accommodate flexible schedules whenever possible.
              </p>
            </div>
          </div>
        </div>
      </NavBar>
    </main>
  );
}
