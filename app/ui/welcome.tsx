import Link from "next/link";
import { rectangles } from "@/app/lib/store";
import Rectangle from "@/app/ui/rectangle";
import TextButton from "@/app/ui/text-button";

export default function Welcome({ isActive }: { isActive: number }) {
  return (
    <>
      <p className="w-[11.375rem] text-stone-900 text-[2.75rem] font-medium font-jost leading-[3.625rem] mt-16 dark:text-white">
        Hi!👋
      </p>
      <p className="text-neutral-400 text-xl font-normal font-jost mt-4">
        Welcome to MacPaw Bootcamp 2023
      </p>
      <p className="text-stone-900 text-xl font-medium font-jost mt-16 dark:text-white">
        Lets start using The Cat API
      </p>
      <div className="flex flex-col self-center mt-8 sm:flex-row sm:self-auto">
        {rectangles.map((rectangle, i) => (
          <div key={rectangle.text}>
            <Link href={`/${rectangle.text.toLowerCase()}`}>
              <Rectangle
                backgroundColor={rectangle.backgroundColor}
                url={rectangle.url}
                isActive={isActive === i + 1}
              />
            </Link>
            <Link href={`/${rectangle.text.toLowerCase()}`}>
              <TextButton isActive={isActive === i + 1}>
                {rectangle.text}
              </TextButton>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
