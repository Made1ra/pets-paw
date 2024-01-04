import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Breed, Category, addLog, removeBreed } from '@/app/lib/store';
import { formatDate } from '@/app/lib/utils/format-date';
import PetImage from '@/app/ui/pet-image';

export default function VotedGrid({
    type,
    images
}: {
    type: Category
    images: Breed[]
}) {
    const dispatch = useDispatch();

    const gridPattern: Array<typeof images> = [];
    const gridSize = 5;
    for (let i = 0; i < images.length; i += gridSize) {
        gridPattern.push(images.slice(i, i + gridSize));
    }

    function handleClick(reference_image_id: string) {
        dispatch(removeBreed({
            reference_image_id,
            dateOfEditing: formatDate(new Date()),
            category: 'Favourites'
        }));
        dispatch(addLog({
            reference_image_id,
            dateOfEditing: formatDate(new Date()),
            category: 'Favourites',
            action: 'removed from'
        }));
    };

    return (
        <div className="w-[42.5rem] h-fit bg-white rounded-[1.25rem] inline-flex flex-col items-start gap-5 mt-2 mb-8
        dark:bg-stone-900 dark:bg-opacity-5
        max-sm:hidden">
            {
                gridPattern.map((_, i) => (
                    i % 2 === 0 ? (
                        <div
                            className="w-[40rem] h-[28.75rem] relative"
                            key={nanoid()}
                        >
                            <PetImage
                                className={`w-[12.5rem] h-[18.75rem] left-0 top-0 absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][0] && 'invisible'}`}
                                url={gridPattern[i][0]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][0].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[13.75rem] -top-80 absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][1] && 'invisible'}`}
                                url={gridPattern[i][1]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][1].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[27.5rem] top-[-29.75rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][2] && 'invisible'}`}
                                url={gridPattern[i][2]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][2].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[26.25rem] h-[18.75rem] left-[13.75rem] top-[-29.5rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][3] && 'invisible'}`}
                                url={gridPattern[i][3]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][3].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-0 top-[-39rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][4] && 'invisible'}`}
                                url={gridPattern[i][4]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][4].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                        </div>
                    ) : (
                        <div
                            className="origin-top-left rotate-180 w-[40rem] h-[28.75rem] relative"
                            key={nanoid()}
                        >
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] -left-8 -top-8 absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][0] && 'invisible'}`}
                                url={gridPattern[i][0]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][0].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] -left-64 top-[-11.75rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][1] && 'invisible'}`}
                                url={gridPattern[i][1]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][1].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[18.75rem] left-[-29.5rem] top-[-21.5rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][2] && 'invisible'}`}
                                url={gridPattern[i][2]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][2].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[26.25rem] h-[18.75rem] -left-8 top-[-51rem] relative origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][3] && 'invisible'}`}
                                url={gridPattern[i][3]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][3].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[-29.5rem] top-[-80.75rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][4] && 'invisible'}`}
                                url={gridPattern[i][4]?.url}
                            >
                                {type === 'Favourites' && (
                                    <div
                                        onClick={() => handleClick(gridPattern[i][4].reference_image_id)}
                                        className="absolute w-10 h-10 bg-white rounded-[0.625rem] z-10 bg-center bg-no-repeat bg-[url('/fav-color-20.svg')]
                                        hover:bg-rose-400 hover:bg-[url('/fav-full-white-20.svg')]"
                                    />
                                )}
                            </PetImage>
                        </div>
                    )
                ))}
        </div>
    );
}
