import useTheme from '../../hooks/useTheme';
import Eye from '../Eye';
import ToggleButton from './ToggleButton';

function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setTheme(!theme);
    };

    return (
        <div className="flex flex-row items-center justify-center ml-32 sm:ml-64">
            <Eye />
            <ToggleButton onClick={handleClick} />
        </div>
    );
}

export default ThemeSwitcher;