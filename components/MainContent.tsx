"use client";

import Image from "next/image";
import { title, subtitle } from "@/components/primitives";

const myLoader = ({ src = "" }) => {
  return src ? src : "";
};

export const MainContent = () => {
  return (
    <section className="flex flex-col items-center gap-2 h-screen">
      <div className="inline-block text-center justify-center">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={256}
          loader={myLoader}
          height={128}
          className="mx-auto"
        />
        <h1 className={title({ size: "lg" })}>دیدار </h1>
        <h1 className={title({ color: "violet", size: "lg" })}>لینک</h1>
        <div className="my-4">
          <h2 className={title()}>
            حرفه ما ساخت ارتباطی موثر و پویا در کسب و کار شماست
          </h2>
          <h3 className={subtitle({ class: "mt-4" })}>زیبا، مدرن و سریع</h3>
        </div>
      </div>
    </section>
  );
};
