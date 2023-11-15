"use client";

import Image from "next/image";
import myLoader from "@/config/Loader";

const ImageContainer = ({ src, alt, width, height, className }: any) => {
  return (
    <Image
      src={`/didar-link/${src}`}
      alt={alt}
      width={width}
      loader={myLoader}
      height={height}
      className={className}
    />
  );
};

export default ImageContainer;
