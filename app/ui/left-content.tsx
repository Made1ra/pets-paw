import Logo from "@/app/ui/logo";
import ThemeSwitcher from "@/app/ui/theme-switcher/theme-switcher";
import Welcome from "@/app/ui/welcome";

export default function LeftContent({ isActive }: { isActive: number }) {
  return (
    <div
      className="mt-4 top-4 z-10 flex-col items-start sticky
            lg:flex lg:ml-6
            xl:ml-32
            2xl:ml-80"
    >
      <div className="flex">
        <Logo />
        <ThemeSwitcher />
      </div>
      <Welcome isActive={isActive} />
    </div>
  );
}
