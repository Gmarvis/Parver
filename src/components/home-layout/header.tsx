"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  BadgeDollarSign,
  CircleAlert,
  Earth,
  MessageCircleMore,
  Sun,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { useTheme } from "next-themes";

const Header = () => {
  const [activeLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  const { theme, setTheme } = useTheme();

  const links = [
    {
      name: "About",
      to: "about",
      icon: <CircleAlert />,
    },
    {
      name: "Feature",
      to: "feature",
      icon: <Earth />,
    },
    {
      name: "Pricing",
      to: "pricing",
      icon: <BadgeDollarSign />,
    },
    {
      name: "Testimonial",
      to: "testimonials",
      icon: <MessageCircleMore />,
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-4 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/" className="flex justify-center items-center gap-1">
              <Image src="/parver.png" alt="Logo VPN" height={30} width={30} />
              <span className="text-black-500 font-semibold ">Parver</span>
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-3 col-end-8 text-sm  items-center">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.to}
                  key={index}
                  className="hidden lg:block px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500"
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center transition-all">
            <Button
              variant={"ghost"}
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun />
            </Button>

            <SignedOut>
            <Link
              href="/login"
              className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all"
            >
              <Button variant={"ghost"} className="rounded-full sm:px-8 ">
                Login
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button variant={"outline"} className="rounded-full sm:px-8  ">
                Sign Up
              </Button>
            </Link>
              {/* <SignInButton /> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            
   
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.to}
                  key={index}
                  className={
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                    (activeLink === "about"
                      ? "  border-orange-500 text-orange-500"
                      : " border-transparent")
                  }
                >
                  {link.icon}

                  {link.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
