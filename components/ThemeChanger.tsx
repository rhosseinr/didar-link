import { useTheme } from "next-themes";
import ImageContainer from "./ImageWrapper";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <button onClick={changeTheme}>
      <ImageContainer
        src="/images/moon.svg"
        alt="theme"
        width={24}
        height={24}
        className="w-6 h-6 dark:hidden"
      />
      <ImageContainer
        src="/images/sun.svg"
        alt="theme"
        width={24}
        height={24}
        className="hidden dark:block w-6 h-6"
      />
    </button>
  );
};

export default ThemeChanger;
