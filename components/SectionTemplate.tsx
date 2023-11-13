"use client";

import Image from "next/image";
import { section } from "./primitives";

const myLoader = ({ src = "" }) => {
  return src ? src : "";
};

const SectionTemplate = ({ title, children, color, icon }: any) => {
  return (
    <section className={section({ color: color })}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="flex justify-center gap-4 w-full text-2xl font-bold tracking-tight sm:text-4xl pb-6">
            {icon && (
              <Image
                loader={myLoader}
                src={icon}
                height={32}
                width={32}
                alt={title}
              />
            )}
            {title}
          </h2>
          <div className="flex mt-6 gap-4 text-lg text-justify leading-8 max-w-3xl lg:mx-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
