"use client";

import { title, subtitle } from "@/components/primitives";
import ImageContainer from "./ImageWrapper";

export const MainContent = () => {
  return (
    <section className="flex flex-col mx-auto max-w-3xl px-4 items-center gap-2 h-screen">
      <div className="inline-block text-center justify-center">
        <ImageContainer
          src="/images/logo.png"
          alt="logo"
          width={256}
          height={128}
          className="mx-auto w-64 h-32"
        />
        <h2 className={title()}>
          خدمات خود را زیبا و با سهولت در دست مشتریان قرار دهید
        </h2>
        <div className="my-4">
          <div className="flex flex-col justify-center items-center w-100">
            <span className={title({ font: "lalezar", size: "sm" })}>
              گروه نرم‌افزاری
            </span>
            <h1>
              <span
                className={title({
                  color: "blue",
                  size: "lg",
                  font: "lalezar",
                  class: "px-2",
                })}
              >
                دیدار
              </span>
              <span
                className={title({
                  color: "gray",
                  size: "lg",
                  font: "lalezar",
                })}
              >
                لینک
              </span>
            </h1>
          </div>
          <span className={subtitle({ class: "mt-4 text-orange-700" })}>
            طراحی اختصاصی - موبایل - وب
          </span>
        </div>
      </div>
    </section>
  );
};
