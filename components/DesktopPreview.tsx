"use client";

import ImageContainer from "./ImageWrapper";

const DesktopPreview = ({ image }: any) => {
  return (
    <div>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] md:h-[294px] md:w-[512px]">
        <div className="rounded-md overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          {image ? (
            <>
              <ImageContainer
                src={`${image}.png`}
                className="dark:hidden h-[156px] md:h-[278px] w-full rounded-md"
                height={312}
                width={556}
                alt=""
              />
              <ImageContainer
                src={`${image}-dark.png`}
                className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-md"
                height={312}
                width={556}
                alt=""
              />
            </>
          ) : (
            <div className="flex items-center justify-center h-[172px] md:h-[294px] md:w-[512px]">
              <h3 className="text-3xl">Coming Soon</h3>
            </div>
          )}
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </div>
  );
};

export default DesktopPreview;
