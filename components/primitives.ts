import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline font-semibold pb-2",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#70aabd] to-[#457b9d]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      gray: "from-gray-300 to-gray-500",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-3xl leading-9",
      lg: "text-4xl lg:text-6xl",
    },
    font: {
      lalezar: "lalezar",
      vazir: "vazirmatn",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
    font: "vazir",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "gray",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "w-full md:w-1/2 my-2 text-lg lg:text-xl text-default-600 block max-w-full",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});

export const section = tv({
  base: "backdrop-blur-md backdrop-saturate-150 py-12 sm:py-24 min-h-screen",
  variants: {
    color: {
      level1: "level-1 bg-neutral-300/50 dark:bg-neutral-700/50",
      level2: "level-2 bg-neutral-400/50 dark:bg-neutral-800/50",
      level3: "level-3 bg-neutral-500/50 dark:bg-neutral-900/50",
      level4: "level-4 bg-neutral-600/50 dark:bg-neutral-950/50",
    },
  },
  defaultVariants: {
    color: "level1",
  },
});
