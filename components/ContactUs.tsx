"use client";

import Image from "next/image";
import SectionTemplate from "./SectionTemplate";
import myLoader from "@/config/Loader";

const footerLink = [
  { id: "1", title: "Twitter", image: "/images/twitter.svg", link: "#" },
  { id: "2", title: "Facebook", image: "/images/facebook.svg", link: "#" },
  { id: "3", title: "Youtube", image: "/images/youtube.svg", link: "#" },
];
export const ContactUs = () => {
  return (
    <SectionTemplate color="level5">
      <div className="text-white flex flex-col justify-center items-center h-full">
        <div className="gap-4 flex flex-col justify-center items-center">
          <Image
            src="/images/mini-logo.png"
            alt="logo"
            width={64}
            loader={myLoader}
            height={64}
            className="mx-auto h-16 w-16"
          />
          <h2 className="lalezar text-4xl">دیدار‌لینک</h2>
          <p className="font-bold text-center">
            ارائه فناوری قابل اعتماد از سال 1395
          </p>
        </div>
        <nav>
          <div className="grid grid-flow-col gap-4 my-4">
            {footerLink.map((item) => (
              <a
                href={item.link}
                key={item.id}
                className="grayscale hover:grayscale-0 rounded-md p-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={24}
                  loader={myLoader}
                  height={24}
                  className="mx-auto h-6 w-6"
                />
              </a>
            ))}
          </div>
          <p className="flex justify-center items-center">Copyright © 1402</p>
        </nav>
      </div>
    </SectionTemplate>
  );
};
