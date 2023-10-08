type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="flex flex-col w-[42.5rem] h-[52.5rem] bg-stone-50 rounded-[1.25rem] z-20">
            <button
                className="self-end m-4 w-10 h-10 rounded-[10px] bg-center bg-no-repeat bg-[url('../src/assets/close-20.svg')]"
                onClick={() => onClose()}
            />
            <div className="flex flex-col text-center">
                <div className="mt-8 text-stone-900 text-4xl font-medium font-jost">
                    Upload a .jpg or .png Cat Image
                </div>
                <span className="mt-4 text-neutral-400 text-xl font-normal font-jost leading-[1.875rem]">
                    Any uploads must comply with the
                    <a
                        className="text-rose-400 text-xl font-normal font-jost leading-[1.875rem]"
                        target="_blank"
                        href="https://thecatapi.com/privacy"
                    >
                        {` upload guidelines `}
                    </a>
                    or face deletion.
                </span>
                <div className="flex justify-center mt-8 w-[40rem] h-80 bg-white rounded-[1.25rem] border-2 border-red-100">
                    <div className="flex flex-col items-center justify-center">
                        <div className="text-stone-900 text-xl font-medium font-jost leading-[1.875rem]">
                            Drag here
                            <span className="text-neutral-400">
                                {` your file or `}
                            </span>
                            {` Click here `}
                            <span className="text-neutral-400">
                                to upload
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-neutral-400 text-xl font-normal font-jost leading-[1.875rem]">
                    No file selected
                </div>
                {children}
            </div>
        </div>
    );
}

export default Modal;
