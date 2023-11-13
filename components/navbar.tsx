"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

const myLoader = ({ src = "" }) => {
  return src ? src : "";
};

export const Navbar = () => {
  return (
    <nav className="p-4 bg-neutral-200/50 dark:bg-neutral-950/50 backdrop-blur-md backdrop-saturate-150 sticky top-0 z-10">
      <div className="flex justify-between w-full px-4">
        <Link className="flex justify-start items-center gap-1" href="/">
          <Image
            src="/images/mini-logo.png"
            alt="logo"
            width={32}
            loader={myLoader}
            height={32}
            className="mx-auto"
          />
          <p className="font-bold text-inherit">دیدار‌لینک</p>
        </Link>
        <ThemeChanger />
      </div>
    </nav>
  );
};
