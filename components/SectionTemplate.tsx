"use client";

import { section, title as titleCss } from "./primitives";

const SectionTemplate = ({ title, children, color }: any) => {
  return (
    <section className={section({ color: color })}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2
            className={titleCss({
              font: "lalezar",
            })}
          >
            {title}
          </h2>
          <div className="flex flex-col md:flex-row mt-2 gap-4 text-lg text-justify leading-8 max-w-6xl lg:mx-0">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTemplate;
