import Image from "next/image";

export default function Rectangle({
  backgroundColor,
  url,
  isActive,
}: {
  backgroundColor: string;
  url: string;
  isActive: boolean;
}) {
  return (
    <div className="mb-2 mr-4 hidden cursor-pointer flex-col sm:flex">
      <div
        className={`flex h-[12.375rem] w-[8.625rem] items-center justify-center rounded-[1.25rem] border-2 border-white ${
          isActive ? "border-red-100 border-opacity-0" : "border-opacity-60"
        } hover:border-opacity-0 active:border-red-100`}
        style={{ backgroundColor }}
      >
        {url === "/vote-table.svg" && (
          <Image
            src={url}
            alt="Vote table"
            width={100}
            height={125}
            priority={true}
          />
        )}
        {url === "/pet-breeds.svg" && (
          <Image
            src={url}
            alt="Pet breeds"
            width={117}
            height={163}
            priority={true}
          />
        )}
        {url === "/images-search.svg" && (
          <Image
            src={url}
            alt="Images search"
            width={112}
            height={190}
            priority={true}
          />
        )}
      </div>
    </div>
  );
}
