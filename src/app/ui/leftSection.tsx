import Logo from '@/app/ui/logo';
import ThemeSwitcher from '@/app/ui/themeSwitcher/themeSwitcher';
import Welcome from '@/app/ui/welcome';

export default function LeftSection({
    isActive
}: {
    isActive: number
}) {
    return (
        <div className="hidden mt-4 top-4 z-10 flex-col items-start
            lg:flex lg:sticky lg:ml-6
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
