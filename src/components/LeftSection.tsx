import Logo from './Logo';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Welcome from './Welcome';

type LeftSectionProps = {
    isActive: number;
};

function LeftSection({ isActive }: LeftSectionProps) {
    return (
        <div className="mt-4 top-4 z-10 flex-col items-start
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

export default LeftSection;
