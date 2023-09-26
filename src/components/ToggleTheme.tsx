import Eye from './Eye';
import ToggleButton from './ToggleButton';

function ToggleTheme() {
    return (
        <div className="flex flex-row items-center justify-center ml-64">
            <Eye />
            <ToggleButton />
        </div>
    );
}

export default ToggleTheme;
