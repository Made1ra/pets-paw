import { Log } from '../store';

function ActionMessage({ dateOfEditing, reference_image_id, category, action }: Log) {
    return (
        <div className="flex flex-shrink-0 flex-row items-center justify-between mb-3 px-4 py-4 w-[47rem] h-[3.75rem] rounded-[0.625rem] bg-stone-50
        dark:bg-white dark:bg-opacity-5
        lg:w-[40rem]"
        >
            <div className="flex items-center justify-center w-[3.8125rem] h-[1.875rem] bg-white rounded-[0.3125rem] dark:bg-stone-900">
                <div className="w-[2.5625rem] text-stone-900 text-base font-normal font-jost leading-normal dark:text-white">
                    {dateOfEditing}
                </div>
            </div>
            <div className="w-full ml-4">
                <span className="text-neutral-400 text-base font-normal font-jost leading-normal">
                    Image ID:
                </span>
                <span className="mx-2 text-stone-900 text-base font-medium font-jost leading-normal dark:text-white">
                    {reference_image_id}
                </span>
                <span className="text-neutral-400 text-base font-normal font-jost leading-normal">
                    was {action} {category}
                </span>
            </div>
            <div className="flex items-start justify-start">
                <>
                    {category === 'Likes' && (
                        <div className="w-5 h-5 flex-shrink-0 bg-no-repeat bg-center bg-[url('../src/assets/like-color-20.svg')]" />
                    )}
                    {category === 'Favourites' && (
                        <div className="w-5 h-5 flex-shrink-0 bg-no-repeat bg-center bg-[url('../src/assets/fav-color-20.svg')]" />
                    )}
                    {category === 'Dislikes' && (
                        <div className="w-5 h-5 flex-shrink-0 bg-no-repeat bg-center bg-[url('../src/assets/dislike-color-20.svg')]" />
                    )}
                </>
            </div>
        </div>
    );
}

export default ActionMessage;
