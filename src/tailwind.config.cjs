import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  // State to track dark mode
  const [dark, setDark] = useState(false);

  // On first render, check localStorage for saved theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") setDark(true);
  }, []);

  // Apply class to <html> and save preference whenever state changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark"); // apply dark mode
      localStorage.setItem("theme", "dark");           // save preference
    } else {
      document.documentElement.classList.remove("dark"); // remove dark mode
      localStorage.setItem("theme", "light");           // save preference
    }
  }, [dark]);

  // Simple toggle button
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}