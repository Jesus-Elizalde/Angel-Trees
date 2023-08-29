"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
const NavBar = ({ children }: Props) => {
  const pathname = usePathname();
  console.log("🚀 ~ file: NavBar.tsx:11 ~ NavBar ~ pathname:", pathname);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div
          className={`w-screen navbar ${
            pathname !== "/" && "bg-primary rounded-b-3xl"
          }`}
        >
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-neutral-content">
            <Link href="/">Angel Tree Services</Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal text-neutral-content">
              {/* Navbar menu content here */}
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/aboutus">About us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-neutral-content">
          {/* Sidebar content here */}
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/aboutus">About us</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
