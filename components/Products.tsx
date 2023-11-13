"use client";

import { ProductCard } from "./ProductCard";
import SectionTemplate from "./SectionTemplate";
import { useState } from "react";
import MobilePreview from "./MobilePreview";
import DesktopPreview from "./DesktopPreview";
import { AnimatePresence, motion } from "framer-motion";

const productList = [
  {
    id: "1",
    title: "7 طبیب",
    image: "/projects/7tabib-logo.png",
    shortDescription: "حوزه سلامت و درمان",
    description: "برای دسترسی آسان بیماران به خدمات پزشکی",
    mobileScreen: "/projects/7tabib",
    desktopScreen: "/projects/7tabib-desktop",
    url: "https://www.7tabib.ir",
  },
  {
    id: "2",
    title: "جم جیم",
    image: "/projects/gem-gym-logo.png",
    shortDescription: "حوزه ورزش و تندرستی",
    description: "برای دسترسی آسان ورزشکاران به خدمات ورزشی",
    mobileScreen: "/projects/gemgym",
    desktopScreen: "/projects/gemgym-desktop",
    url: "https://www.gemgym.ir",
  },
];

export const Products = () => {
  const [selected, setSelected] = useState<any | null>(null);

  const onItemClick = (item: any) => {
    setSelected(item);
  };

  return (
    <>
      <SectionTemplate
        title="نمونه کار"
        color="level3"
        icon="/images/toolbox.svg"
      >
        <section className="flex items-center justify-center gap-4">
          {productList.map((item) => (
            <ProductCard
              item={item}
              key={item.id}
              onItemClick={() => onItemClick(item)}
            />
          ))}
        </section>
      </SectionTemplate>
      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              layoutId={selected.id}
              className="rounded-xl fixed md:inset-x-24 md:inset-y-12 inset-0 bg-neutral-100 z-20 dark:bg-neutral-800 p-2 shadow-md"
            >
              <motion.div className="p-2 gap-1">
                <motion.h4 className="text-lg">{selected.title}</motion.h4>
                <span className="text-sm mb-4">
                  {selected.shortDescription}
                </span>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <MobilePreview image={selected.mobileScreen} />
                  <DesktopPreview image={selected.desktopScreen} />
                </div>
                <div className="text-tiny my-4">{selected.description}</div>
              </motion.div>
              <motion.div className="gap-2 items-center flex px-4 justify-end mt-4">
                <motion.a
                  href={selected.url}
                  className="bg-green-500 rounded-md px-4 py-2"
                  target="_blank"
                  onClick={() => setSelected(null)}
                >
                  رفتن به سایت
                </motion.a>
                <motion.button
                  className="bg-red-500 rounded-md px-4 py-2"
                  onClick={() => setSelected(null)}
                >
                  بستن
                </motion.button>
              </motion.div>
            </motion.div>
            <motion.div
              className="backdrop"
              onClick={() => setSelected(null)}
            ></motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
