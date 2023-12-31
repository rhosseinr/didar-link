"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import ImageContainer from "./ImageWrapper";

export const Navbar = () => {
  return (
    <nav className="h-10 flex items-center bg-neutral-200/50 dark:bg-neutral-950/50 backdrop-blur-md backdrop-saturate-150 sticky top-0 z-20">
      <div className="flex justify-between w-full px-8">
        <Link className="flex justify-start items-center gap-1" href="/">
          <ImageContainer
            src="/images/mini-logo.png"
            alt="logo"
            width={32}
            height={32}
            className="mx-auto h-8"
          />
          <p className="font-bold text-inherit">دیدار‌لینک</p>
        </Link>
        <ThemeChanger />
      </div>
    </nav>
  );
};
