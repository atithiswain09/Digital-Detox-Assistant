import { ThemeProviderContext } from "@/hooks/use-theme";
import { useEffect, useState } from "react";

/**
 * @typedef {"dark" | "light" | "system"} Theme
 */

/**
 * @typedef {Object} ThemeProviderProps
 * @property {import("react").ReactNode} children
 * @property {Theme} [defaultTheme]
 * @property {string} [storageKey]
 */

/**
 * @param {ThemeProviderProps} props
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  /** @type {[Theme, (theme: Theme) => void]} */
  const [theme, setTheme] = useState(
    () =>
      /** @type {Theme} */ (localStorage.getItem(storageKey)) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  /** @type {{ theme: Theme, setTheme: (theme: Theme) => void }} */
  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
