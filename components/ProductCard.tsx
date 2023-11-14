"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import myLoader from "@/config/Loader";

export const ProductCard = ({ item, onItemClick }: any) => {
  return (
    <motion.div
      layoutId={item.id}
      className="card bg-neutral-100 dark:bg-neutral-800 rounded-xl p-2 shadow-sm hover:shadow-md"
      onClick={onItemClick}
    >
      <motion.div className="p-2 gap-1">
        <motion.strong className="text-lg">{item.title}</motion.strong>
        <p className="text-sm">{item.shortDescription}</p>
      </motion.div>
      <figure>
        <Image
          alt={item.title}
          className="object-cover rounded-xl"
          src={item.image}
          loader={myLoader}
          width={200}
          height={200}
        />
      </figure>
    </motion.div>
  );
};
