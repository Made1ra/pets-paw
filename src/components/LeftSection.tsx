import Logo from './Logo';
import Welcome from './Welcome';

type LeftSectionProps = {
    isActive: number;
};

function LeftSection({ isActive }: LeftSectionProps) {
    return (
        <div className="flex flex-col items-start ml-80">
            <Logo />
            <Welcome isActive={isActive} />
        </div>
    );
}

export default LeftSection;
