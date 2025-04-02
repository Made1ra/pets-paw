"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;

  const localTheme = isLocalStorageAvailable
    ? localStorage.getItem("app-theme") === "dark"
      ? true
      : localStorage.getItem("app-theme") === "light"
        ? false
        : true
    : true;

  const [theme, setTheme] = useState(localTheme);

  useEffect(() => {
    if (isLocalStorageAvailable) {
      document.documentElement.setAttribute(
        "app-theme",
        theme ? "dark" : "light",
      );
      localStorage.setItem("app-theme", theme ? "dark" : "light");
    }
  }, [theme, isLocalStorageAvailable]);

  return { theme, setTheme };
}
