import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { Moon, Sun } from "lucide-react";
import { useCallback } from "react";

/**
 * Helper function to detect if the user prefers a dark color scheme.
 * @returns {boolean} True if the user prefers dark mode, false otherwise.
 */
const prefersDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 * Props for the ThemeToggle component.
 * @typedef {Object} ThemeToggleProps
 * @property {import("react").ReactNode} [children] - Optional children to render inside the button.
 * @property {string} [className] - Additional CSS classes to apply to the button.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {function(): void} [onClick] - Optional click handler in addition to theme toggle.
 * @property {any} [rest] - Any other props that can be passed to the underlying Button component.
 */

/**
 * ThemeToggle component switches between light and dark themes.
 * It uses a button with Sun and Moon icons to indicate the current theme.
 *
 * @param {ThemeToggleProps} props - Props to customize the button.
 * @returns {JSX.Element} A button that toggles between light and dark themes.
 */
export function ThemeToggle({ ...props }) {
  const { theme, setTheme } = useTheme();

  /**
   * Toggles the theme between 'light' and 'dark'.
   * If the theme is undefined, it uses the user's preferred color scheme.
   */
  const toggleTheme = useCallback(() => {
    const newTheme =
      theme === "dark"
        ? "light"
        : theme === "light"
          ? "dark"
          : prefersDarkMode()
            ? "light"
            : "dark";

    setTheme(newTheme);
  }, [setTheme, theme]);

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} {...props}>
      <Sun className="h-[1.2rem] w-[1.2rem] transition-all rotate-0 scale-100 dark:rotate-90 dark:scale-0" />
      <Moon className="h-[1.2rem] w-[1.2rem] absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
