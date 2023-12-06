import Link from 'next/link';
import { nanoid } from 'nanoid';
import PetImage from '@/app/ui/petImage';
import Button from '@/app/ui/button';

export default function SearchGrid({
    images
}: {
    images: {
        name: string
        image: {
            url: string
        }
        id: string
    }[]
}) {
    const gridPattern: Array<typeof images> = [];
    const gridSize = 5;
    for (let i = 0; i < images.length; i += gridSize) {
        gridPattern.push(images.slice(i, i + gridSize));
    }

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
                                url={gridPattern[i][0]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][0]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-44 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][0]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[13.75rem] -top-80 absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][1] && 'invisible'}`}
                                url={gridPattern[i][1]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][1]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][1]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[27.5rem] top-[-29.75rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][2] && 'invisible'}`}
                                url={gridPattern[i][2]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][2]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][2]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[26.25rem] h-[18.75rem] left-[13.75rem] top-[-29.5rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][3] && 'invisible'}`}
                                url={gridPattern[i][3]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][3]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-28 top-44 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][3]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-0 top-[-39rem] absolute bg-stone-300 rounded-3xl
                                ${!gridPattern[i][4] && 'invisible'}`}
                                url={gridPattern[i][4]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][4]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][4]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                        </div>
                    ) : (
                        <div
                            className="origin-top-left rotate-180 w-[40rem] h-[28.75rem] relative"
                            key={nanoid()}
                        >
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] -left-5 -top-8 absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][0] && 'invisible'}`}
                                url={gridPattern[i][0]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][0]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][0]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] -left-60 top-[-11.75rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][1] && 'invisible'}`}
                                url={gridPattern[i][1]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][1]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][1]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[18.75rem] left-[-29rem] top-[-21.5rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][2] && 'invisible'}`}
                                url={gridPattern[i][2]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][2]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-44 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][2]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[26.25rem] h-[18.75rem] -left-5 top-[-51rem] relative origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][3] && 'invisible'}`}
                                url={gridPattern[i][3]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][3]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-28 top-44 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][3]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                            <PetImage
                                className={`w-[12.5rem] h-[8.75rem] left-[-29rem] top-[-80.75rem] absolute origin-top-left rotate-180 bg-stone-300 rounded-3xl
                                ${!gridPattern[i][4] && 'invisible'}`}
                                url={gridPattern[i][4]?.image?.url}
                            >
                                <Link href={`/breeds/${gridPattern[i][4]?.id}`}>
                                    <Button className="mt-20 z-20 absolute left-2 top-4 w-[11.25rem] h-[2.125rem]
                                    dark:bg-zinc-800">
                                        {gridPattern[i][4]?.name}
                                    </Button>
                                </Link>
                            </PetImage>
                        </div>
                    )
                ))
            }
        </div >
    );
}
