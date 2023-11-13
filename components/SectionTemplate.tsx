"use client";

import { section, title } from "./primitives";

const SectionTemplate = ({ title, children, color }: any) => {
  return (
    <section className={section({ color: color })}>
      <div className="mx-auto px-6 lg:px-8">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="flex justify-center gap-4 w-full text-2xl font-bold tracking-tight sm:text-4xl pb-6">
            <span className="lalezar text-neutral-800 dark:text-neutral-200">
              {title}
            </span>
          </h2>
          <div className="flex flex-col md:flex-row mt-6 gap-4 text-lg text-justify leading-8 max-w-6xl lg:mx-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
