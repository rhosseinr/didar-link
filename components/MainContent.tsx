"use client";

import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import myLoader from "@/config/Loader";

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
        <h1 className={title({ color: "blue", size: "lg", font: "lalezar" })}>
          دیدار{" "}
        </h1>
        <h1 className={title({ color: "gray", size: "lg", font: "lalezar" })}>
          لینک
        </h1>
        <div className="my-4">
          <h2 className={title()}>
            خدمات خود را زیبا و با سهولت در دست مشتریان قرار دهید
          </h2>
          <h3 className={subtitle({ class: "mt-4 text-orange-600" })}>
            طراحی اختصاصی - موبایل - وب
          </h3>
        </div>
      </div>
    </section>
  );
};
