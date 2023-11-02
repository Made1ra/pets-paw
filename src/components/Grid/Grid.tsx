import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Breed, addBreed, removeBreed, addLog } from '../../store';
import { formatDate } from '../../utilities/formatDate';
import PetImage from '../PetImage';
import SmallFavouriteButton from '../SmallFavouriteButton';
import Button from '../Button';

type GridProps = {
    type: 'Breeds' | 'Gallery';
    breedsImages: {
        id: string;
        url: string;
        breeds: {
            name?: string;
            id: string;
        }[];
    }[];
    galleryImages: {
        url: string;
        breeds: [{
            reference_image_id: string;
            id: string;
            name?: string;
        }];
    }[];
};

function Grid({ type, breedsImages, galleryImages }: GridProps) {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const dispatch = useDispatch();

    let images = [];
    if (type === 'Breeds') {
        images = breedsImages;
    } else {
        images = galleryImages;
    }

    const gridPattern: Array<typeof images> = [];
    const gridSize = 5;
    for (let i = 0; i < images.length; i += gridSize) {
        gridPattern.push(images.slice(i, i + gridSize));
    }

    const handleClick = async (url: string) => {
        const match = url.match(/\/images\/([^/]+)\.\w+$/);
        let id = '';
        if (match) {
            id = match[1];
        }

        const filteredBreeds = breeds.find((breed) => breed.url === url);
        if (!filteredBreeds) {
            dispatch(addBreed({
                reference_image_id: id,
                dateOfEditing: formatDate(new Date()),
                category: 'Favourites',
                url
            }));
            dispatch(addLog({
                reference_image_id: id,
                dateOfEditing: formatDate(new Date()),
                category: 'Favourites',
                action: 'added to'
            }));
        } else {
            dispatch(removeBreed({
                reference_image_id: filteredBreeds.reference_image_id,
                dateOfEditing: formatDate(new Date()),
                category: 'Favourites'
            }));
            dispatch(addLog({
                reference_image_id: filteredBreeds.reference_image_id,
                dateOfEditing: formatDate(new Date()),
                category: 'Favourites',
                action: 'removed from'
            }));
        }
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
                                className="w-[12.5rem] h-[18.75rem] left-0 top-0 absolute bg-stone-300 rounded-3xl"
                                url={gridPattern[i][0].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][0].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-44 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][0].breeds[0].name || ''}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][0].url)}
                                        onClick={() => handleClick(gridPattern[i][0].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[26.25rem] h-[18.75rem] left-[13.75rem] top-[-10rem] absolute bg-stone-300 rounded-3xl"
                                url={gridPattern[i][1].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][1].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-28 top-44 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][1].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][1].url)}
                                        onClick={() => handleClick(gridPattern[i][1].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] left-[13.75rem] top-[-39.5rem] absolute bg-stone-300 rounded-3xl"
                                url={gridPattern[i][2].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][2].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][2].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][2].url)}
                                        onClick={() => handleClick(gridPattern[i][2].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] left-0 top-[-29.5rem] absolute bg-stone-300 rounded-3xl"
                                url={gridPattern[i][3].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][3].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][3].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][3].url)}
                                        onClick={() => handleClick(gridPattern[i][3].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] left-[27.5rem] top-[-59rem] absolute bg-stone-300 rounded-3xl"
                                url={gridPattern[i][4].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][4].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][4].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][4].url)}
                                        onClick={() => handleClick(gridPattern[i][4].url)}
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
                                className="w-[12.5rem] h-[18.75rem] left-[-29.5rem] -top-8 absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl"
                                url={gridPattern[i][0].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][0].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-44 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][0].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][0].url)}
                                        onClick={() => handleClick(gridPattern[i][0].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[26.25rem] h-[18.75rem] -left-8 top-[-31.5rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl"
                                url={gridPattern[i][1].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][1].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-28 top-44 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][1].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][1].url)}
                                        onClick={() => handleClick(gridPattern[i][1].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] left-[-15.5rem] top-[-41.5rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl"
                                url={gridPattern[i][2].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][2].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][2].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][2].url)}
                                        onClick={() => handleClick(gridPattern[i][2].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] -left-8 top-[-51rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl"
                                url={gridPattern[i][3].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][3].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][3].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][3].url)}
                                        onClick={() => handleClick(gridPattern[i][3].url)}
                                    />
                                )}
                            </PetImage>
                            <PetImage
                                className="w-[12.5rem] h-[8.75rem] left-[-29.75rem] top-[-80.75rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl"
                                url={gridPattern[i][4].url}
                            >
                                {type === 'Breeds' && (
                                    <Link
                                        to={`/breed/${gridPattern[i][4].breeds[0]?.id}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                        dark:bg-zinc-800">
                                            {gridPattern[i][4].breeds[0]?.name}
                                        </Button>
                                    </Link>
                                )}
                                {type === 'Gallery' && (
                                    <SmallFavouriteButton
                                        isFavourite={undefined !== breeds.find((b) => b.url === gridPattern[i][4].url)}
                                        onClick={() => handleClick(gridPattern[i][4].url)}
                                    />
                                )}
                            </PetImage>
                        </div>
                    )
                ))}
        </div>
    );
}

export default Grid;
