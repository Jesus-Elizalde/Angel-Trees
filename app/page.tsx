import { MainHero, NavBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar>
        <div className="flex flex-row-reverse">
          <MainHero />
        </div>
      </NavBar>
    </main>
  );
}
