import Image from 'next/image';

export default function GirlAndPet() {
    return (
        <div className="flex relative mt-4">
            <div className="flex-shrink-0 absolute top-1/2 left-1/2 w-[42.5rem] h-[52.5rem] bg-red-100 rounded-[1.25rem] z-10 transform -translate-x-1/2 -translate-y-1/2
            dark:bg-stone-50 dark:bg-opacity-10" />
            <Image
                className="flex-shrink-0 z-20"
                src="/girl-and-pet.svg"
                alt="Girl and pet"
                width={775}
                height={900}
                priority={true}
            />
        </div>
    );
}
