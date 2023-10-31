import { Link } from 'react-router-dom';
import { rectangles } from '../../store';
import Rectangle from '../Rectangle';
import TextButton from '../TextButton';
import CloseButton from '../Modal/CloseButton';

type MenuProps = {
    isActive: number;
    isOpen: boolean;
    onClose: () => void;
};

function Menu({ isActive, isOpen, onClose }: MenuProps) {
    const handleClose = () => {
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex flex-col w-full h-full bg-stone-50 rounded-[1.25rem] z-20 fixed left-0 top-0
        lg:hidden
        dark:bg-stone-800">
            <CloseButton onClick={() => handleClose()} />
            <div className="flex flex-col justify-center self-center mt-4 sm:flex-row sm:self-auto">
                {rectangles.map((rectangle, i) => (
                    <div key={rectangle.text}>
                        <Link
                            to={`/${rectangle.text.toLowerCase()}`}
                            style={{ textDecoration: 'none' }}
                            onClick={() => handleClose()}
                        >
                            <Rectangle
                                backgroundColor={rectangle.backgroundColor}
                                url={rectangle.url}
                                isActive={isActive === i + 1}
                            />
                        </Link>
                        <Link
                            to={`/${rectangle.text.toLowerCase()}`}
                            style={{ textDecoration: 'none' }}
                            onClick={() => handleClose()}
                        >
                            <TextButton
                                className="ml-0 mt-5"
                                isActive={isActive === i + 1}
                            >
                                {rectangle.text}
                            </TextButton>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
