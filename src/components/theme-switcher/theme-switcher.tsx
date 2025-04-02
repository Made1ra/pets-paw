"use client";

import { useTheme } from "@/hooks/use-theme";
import Eye from "@/components/eye";
import ToggleButton from "@/components/theme-switcher/toggle-button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    setTheme(!theme);
  };

  return (
    <div className="ml-32 flex flex-row items-center justify-center sm:ml-64">
      <Eye />
      <ToggleButton onClick={handleClick} />
    </div>
  );
}
