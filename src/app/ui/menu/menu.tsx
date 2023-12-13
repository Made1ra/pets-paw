import Link from 'next/link';
import { rectangles } from '@/app/lib/store';
import Rectangle from '@/app/ui/rectangle';
import TextButton from '@/app/ui/text-button';
import CloseButton from '@/app/ui/modal/close-button';

export default function Menu({
    isActive,
    isOpen,
    onClose
}: {
    isActive: number
    isOpen: boolean
    onClose: () => void
}) {
    function handleClose() {
        onClose();
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex flex-col w-full h-full bg-stone-50 rounded-[1.25rem] z-30 fixed left-0 top-0
        lg:hidden
        dark:bg-stone-800">
            <CloseButton onClick={() => handleClose()} />
            <div className="flex flex-col justify-center self-center max-sm:-ml-24 mt-4 sm:flex-row sm:self-auto">
                {rectangles.map((rectangle, i) => (
                    <div key={rectangle.text}>
                        <Link
                            href={`/${rectangle.text.toLowerCase()}`}
                            onClick={() => handleClose()}
                        >
                            <Rectangle
                                backgroundColor={rectangle.backgroundColor}
                                url={rectangle.url}
                                isActive={isActive === i + 1}
                            />
                        </Link>
                        <Link
                            href={`/${rectangle.text.toLowerCase()}`}
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
