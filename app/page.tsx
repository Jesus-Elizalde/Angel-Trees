import { MainHero, NavBar, ServiceCarousel } from "@/components";
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
          <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase my-4 ">
            Services We Provide
          </h1>
          <ServiceCarousel />
        </div>
      </NavBar>
    </main>
  );
}
