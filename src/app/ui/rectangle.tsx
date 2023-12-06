import Image from 'next/image';

export default function Rectangle({
    backgroundColor,
    url,
    isActive
}: {
    backgroundColor: string
    url: string
    isActive: boolean
}) {
    return (
        <div className="hidden flex-col mr-4 mb-2 cursor-pointer sm:flex">
            <div
                className={`flex items-center justify-center w-[8.625rem] h-[12.375rem] ${backgroundColor} rounded-[1.25rem] border-2 border-white ${isActive ? 'border-opacity-0 border-red-100' : 'border-opacity-60'} hover:border-opacity-0 active:border-red-100`}
            >
                {url === '/vote-table.svg' && (
                    <Image
                        src={url}
                        alt="Vote table"
                        width={100}
                        height={125}
                    />
                )}
                {url === '/pet-breeds.svg' && (
                    <Image
                        src={url}
                        alt="Pet breeds"
                        width={117}
                        height={163}
                    />
                )}
                {url === '/images-search.svg' && (
                    <Image
                        src={url}
                        alt="Images search"
                        width={112}
                        height={190}
                    />
                )}
            </div>
        </div >
    );
}
