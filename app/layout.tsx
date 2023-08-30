import { NavBar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Angels Tree Service",
  description: "App created by Chuy.tech",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar>
          <div className="flex flex-col justify-between h-screen">
            {children}
            <footer className="footer p-10 text-neutral-content">
              <div>
                <p>Angel&apos;s Tree Service</p>
              </div>
              <div className="flex">
                <Image
                  src="/svgs/phone-icon.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <p>+650 320 3234</p>
              </div>
              <div className="flex">
                <Image
                  src="/svgs/location-icon.svg"
                  alt="phone"
                  width={20}
                  height={20}
                />
                <div>
                  <p>3209 Street St,</p>
                  <p>California, 94303</p>
                </div>
              </div>
            </footer>
          </div>
        </NavBar>
      </body>
    </html>
  );
}
