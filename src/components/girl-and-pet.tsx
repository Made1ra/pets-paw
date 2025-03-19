import Image from "next/image";

export default function GirlAndPet() {
  return (
    <div className="relative mt-4 flex">
      <div className="absolute left-1/2 top-1/2 z-10 h-[52.5rem] w-[42.5rem] flex-shrink-0 -translate-x-1/2 -translate-y-1/2 transform rounded-[1.25rem] bg-red-100 dark:bg-stone-50 dark:bg-opacity-10" />
      <Image
        className="z-20 flex-shrink-0"
        src="/girl-and-pet.svg"
        alt="Girl and pet"
        width={775}
        height={900}
        priority={true}
      />
    </div>
  );
}
