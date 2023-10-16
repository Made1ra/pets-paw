import Logo from './Logo';
import ToggleTheme from './ToggleTheme';
import Welcome from './Welcome';

type LeftSectionProps = {
    isActive: number;
};

function LeftSection({ isActive }: LeftSectionProps) {
    return (
        <div className="mt-4 top-4 z-10 flex flex-col items-start lg:sticky lg:ml-6 xl:ml-32 2xl:ml-80">
            <div className="flex">
                <Logo />
                <ToggleTheme />
            </div>
            <Welcome isActive={isActive} />
        </div>
    );
}

export default LeftSection;
