import { MainHero, NavBar } from "@/components";
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
          <h1 className="text-3xl font-bold text-center text-neutral-content font uppercase ">
            Services We Provide
          </h1>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center ">
              <Image
                src="/images/chainsaw.jpg"
                alt="A tree with an orange mark"
                width={90}
                height={90}
                className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
              />
              <h1 className="text-2xl font-bold text-center text-neutral-content font my-4">
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
            <div className="flex flex-col items-center">
              <Image
                src="/images/chainsaw.jpg"
                alt="A tree with an orange mark"
                width={90}
                height={90}
                className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
              />
              <h1 className="text-2xl font-bold text-center text-neutral-content font my-4">
                Landscaping Services
              </h1>
              <div className="text-neutral-content">
                <p className="text-sm">Lawn Maintenance</p>
                <p className="text-sm">Planting and Pruning</p>
                <p className="text-sm">Irrigation</p>
                <p className="text-sm">Fertilization</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/images/chainsaw.jpg"
                alt="A tree with an orange mark"
                width={90}
                height={90}
                className="aspect-square object-cover rounded-xl lg:rounded-[42px] lg:w-[204px] lg:h-[204px]"
              />
              <h1 className="text-2xl font-bold text-center text-neutral-content font my-4">
                Concrete Services
              </h1>
              <div className="text-neutral-content">
                <p className="text-sm">Concreate Installation</p>
                <p className="text-sm">Concrete Repair</p>
              </div>
            </div>
          </div>
        </div>
      </NavBar>
    </main>
  );
}
