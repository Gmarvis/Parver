import Link from "next/link";
import { Button } from "../ui/button";
import {
  BadgeDollarSign,
  CircleAlert,
  Earth,
  MessageCircleMore,
} from "lucide-react";

import { Monoton } from "next/font/google";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeButton } from "../ui/theme-button";

const monoton = Monoton({
  weight: "400",
  subsets: ["latin"],
  style: ["normal"]
})

export function Header() {
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

  return (
    <>
      <header className="fixed top-0 w-full  z-30 bg-white-500 transition-all shadow-sm">
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-4 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Link href="/" className="flex items-center gap-0">
              <h3 className={`text-black-500 text-3xl text-brand py-2 flex font-bold ${monoton.className}`}>a</h3>
              <p className="font-bold text-end mt-2 leading-0">ParVer</p>
            </Link>
          </div>
          <ul className="hidden lg:flex col-start-3  text-sm  items-center">
            {links.map((link, index) => {
              return (
                <Link
                  href={link.to}
                  key={index}
                  className="hidden hover:underline duration-300 transition-all px-2 text-start lg:block py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-brand gap-1"
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>

          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center transition-all">
            <ThemeButton />
            <SignedOut>
              <Link
                href="/login"
                className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-brand gap-1 transition-all"
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
                    "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all border-transparent"
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
}
