const myLoader = ({ src, width, quality }: any) => {
  return src ? `${src}?w=${width}&q=${quality || 75}` : "";
};

export default myLoader;
