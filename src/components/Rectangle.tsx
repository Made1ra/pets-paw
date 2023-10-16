type RectangleProps = {
    backgroundColor: string;
    url: string;
    isActive: boolean;
};

function Rectangle({ backgroundColor, url, isActive }: RectangleProps) {
    return (
        <div className="hidden flex-col mr-4 mb-2 cursor-pointer sm:flex">
            <div
                className={`flex items-center justify-center w-[8.625rem] h-[12.375rem] ${backgroundColor} rounded-[1.25rem] border-2 border-white ${isActive ? 'border-opacity-0 border-red-100' : 'border-opacity-60'} hover:border-opacity-0 active:border-red-100`}
            >
                <img className="w-[6.25rem] h-[7.77925rem]"
                    src={url}
                />
            </div>
        </div >
    );
}

export default Rectangle;
