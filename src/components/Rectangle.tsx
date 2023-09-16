type RectangleProps = {
    backgroundColor: string;
    url: string;
    isActive: boolean;
};

function Rectangle({ backgroundColor, url, isActive }: RectangleProps) {
    return (
        <div className="flex flex-col mr-4 mb-2 cursor-pointer">
            <div
                className={`flex items-center justify-center w-[138px] h-[198px] ${backgroundColor} rounded-[20px] border-2 border-white ${isActive ? 'border-opacity-0' : 'border-opacity-60'} hover:border-opacity-0 active:border-red-100 ${isActive && 'border-red-100'}`}
            >
                <img className="w-[100px] h-[124.47px]"
                    src={url}
                />
            </div>
        </div >
    );
}

export default Rectangle;
