import { useEffect, useState } from "react";

export default function useColorScheme() {
  const [colorScheme, setColorScheme] = useState("dark");

  useEffect(() => {
    const changeHandle = () => {
      (e) => {
        if (e.matches) {
          setColorScheme("dark");
        } else {
          setColorScheme("light");
        }
      };
    };

    const colorScheme = matchMedia("(prefers-color-scheme: dark)");
    //ilk seferde color scheme'i kontrol et
    changeHandle(colorScheme);

    colorScheme.addEventListener("change", changeHandle);

    return () => {
      colorScheme.removeEventListener("change", changeHandle);
    };
  }, []);

  return colorScheme;
}
