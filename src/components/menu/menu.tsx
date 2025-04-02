import Link from "next/link";

import { rectangles } from "@/lib/constants";
import Rectangle from "@/components/rectangle";
import TextButton from "@/components/text-button";
import CloseButton from "@/components/modal/close-button";

export default function Menu({
  isActive,
  isOpen,
  onClose,
}: {
  isActive: number;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed left-0 top-0 z-30 flex h-full w-full flex-col rounded-[1.25rem] bg-stone-50 dark:bg-stone-800 lg:hidden">
      <CloseButton onClick={onClose} />
      <div className="mt-4 flex flex-col justify-center self-center max-sm:-ml-24 sm:flex-row sm:self-auto">
        {rectangles.map((rectangle, i) => (
          <div key={rectangle.text}>
            <Link href={`/${rectangle.text.toLowerCase()}`} onClick={onClose}>
              <Rectangle
                backgroundColor={rectangle.backgroundColor}
                url={rectangle.url}
                isActive={isActive === i + 1}
              />
            </Link>
            <Link href={`/${rectangle.text.toLowerCase()}`} onClick={onClose}>
              <TextButton className="ml-0 mt-5" isActive={isActive === i + 1}>
                {rectangle.text}
              </TextButton>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
