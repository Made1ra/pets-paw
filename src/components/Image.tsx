type ImageProps = {
    src: string;
    alt: string;
};

function Image({ src, alt }: ImageProps) {
    return (
        <img
            className="w-[43rem] h-[22.5rem] rounded-[1.25rem]
            sm:w-[47rem]
            lg:w-[42.25rem]"
            src={src}
            alt={alt}
        />
    );
}

export default Image;
