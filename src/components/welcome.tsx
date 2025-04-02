import Link from "next/link";

import { rectangles } from "@/lib/constants";
import Rectangle from "@/components/rectangle";
import TextButton from "@/components/text-button";

export default function Welcome({ isActive }: { isActive: number }) {
  return (
    <>
      <p className="mt-16 w-[11.375rem] font-jost text-[2.75rem] font-medium leading-[3.625rem] text-stone-900 dark:text-white">
        Hi!👋
      </p>
      <p className="mt-4 font-jost text-xl font-normal text-neutral-400">
        Welcome to MacPaw Bootcamp 2023
      </p>
      <p className="mt-16 font-jost text-xl font-medium text-stone-900 dark:text-white">
        Lets start using The Cat API
      </p>
      <div className="mt-8 flex flex-col self-center sm:flex-row sm:self-auto">
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
