import Logo from "@/app/ui/logo";
import ThemeSwitcher from "@/app/ui/theme-switcher/theme-switcher";
import Welcome from "@/app/ui/welcome";

export default function LeftSection({ isActive }: { isActive: number }) {
  return (
    <div className="sticky top-4 z-10 mt-4 hidden flex-col items-start lg:ml-6 lg:flex xl:ml-32 2xl:ml-80">
      <div className="flex">
        <Logo />
        <ThemeSwitcher />
      </div>
      <Welcome isActive={isActive} />
    </div>
  );
}
