import Image from 'next/image';

export default function Img({
    src,
    alt
}: {
    src: string
    alt: string
}) {
    return (
        <>
            <Image
                className="hidden rounded-[1.25rem] lg:block"
                src={src}
                width={640}
                height={360}
                alt={alt}
            />
            <Image
                className="hidden rounded-[1.25rem] sm:block lg:hidden"
                src={src}
                width={668}
                height={376.18}
                alt={alt}
            />
            <Image
                className="block rounded-[1.25rem] sm:hidden"
                src={src}
                width={295}
                height={166.13}
                alt={alt}
            />
        </>
    );
}
