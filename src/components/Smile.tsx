export type SmileProps = {
    title: string;
};

function Smile({ title }: SmileProps) {
    return (
        <>
            {title === 'likes' && (
                <div className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[60px] h-[60px] bg-white rounded-[20px] bg-center bg-no-repeat bg-[url("../src/assets/like-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 active:bg-rose-400 active:bg-[url("../src/assets/like-white-30.svg")]`} />
            )}
            {title === 'favourites' && (
                <div className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[60px] h-[60px] bg-white rounded-[20px] bg-center bg-no-repeat bg-[url("../src/assets/fav-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 active:bg-rose-400 active:bg-[url("../src/assets/fav-white-30.svg")]`} />
            )}
            {title === 'dislikes' && (
                <div className={`flex flex-shrink-0 items-center justify-center cursor-pointer my-4 mx-2 w-[60px] h-[60px] bg-white rounded-[20px] bg-center bg-no-repeat bg-[url("../src/assets/dislike-30.svg")]
                dark:bg-opacity-5 hover:bg-red-100 active:bg-rose-400 active:bg-[url("../src/assets/dislike-white-30.svg")]`} />
            )}
        </>
    );
}

export default Smile;
