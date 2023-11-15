import myLoader from "@/config/Loader";
import { useTheme } from "next-themes";
import Image from "next/image";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <button onClick={changeTheme}>
      <Image
        src="/images/moon.svg"
        alt="theme"
        width={24}
        height={24}
        loader={myLoader}
        className="w-6 h-6 dark:hidden"
      />
      <Image
        src="/images/sun.svg"
        alt="theme"
        width={24}
        height={24}
        loader={myLoader}
        className="hidden dark:block w-6 h-6"
      />
    </button>
  );
};

export default ThemeChanger;
