import { useState, useEffect } from "react";

export default function DarkModeToggle() {

  const [dark, setDark] = useState(false);

  // loading a theme when opening a page
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDark(true);
    }
  }, []);

  // saving the theme
    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
        }
    }, [dark]);

  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "☀ Light mode" : "🌙 Dark mode"}
    </button>
  );
}