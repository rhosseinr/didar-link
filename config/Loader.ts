const myLoader = ({ src, width, quality }: any) => {
  return src ? `/didar-link/${src}?w=${width}&q=${quality || 75}` : "";
};

export default myLoader;
