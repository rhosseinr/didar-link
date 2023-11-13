"use client";

import Image from "next/image";

const myLoader = ({ src = "" }) => {
  return src ? src : "";
};

const MobilePreview = ({ image }: any) => {
  return (
    <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[7px] rounded-[1rem] h-[300px] w-[150px] shadow-xl">
      <div className="w-[74px] h-[9px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[23px] w-[3px] bg-gray-800 absolute -start-[8px] top-[62px] rounded-s-lg"></div>
      <div className="h-[23px] w-[3px] bg-gray-800 absolute -start-[8px] top-[79px] rounded-s-lg"></div>
      <div className="h-[32px] w-[3px] bg-gray-800 absolute -end-[8px] top-[71px] rounded-e-lg"></div>
      <div className="rounded-[1rem] overflow-hidden w-[136px] h-[286px] bg-white dark:bg-gray-800">
        <Image
          src={`${image}.png`}
          className="dark:hidden w-[136px] h-[286px]"
          height={280}
          loader={myLoader}
          width={580}
          alt=""
        />
        <Image
          src={`${image}-dark.png`}
          className="hidden dark:block w-[136px] h-[286px]"
          height={280}
          loader={myLoader}
          width={580}
          alt=""
        />
      </div>
    </div>
  );
};

export default MobilePreview;
