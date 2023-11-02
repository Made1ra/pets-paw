type ImageProps = {
    src: string;
    alt: string;
};

function Image({ src, alt }: ImageProps) {
    return (
        <img
            className="w-[18.4375rem] h-[10.38306rem] rounded-[1.25rem]
            sm:w-[47rem] sm:h-[22.5rem]
            lg:w-[42.25rem]"
            src={src}
            alt={alt}
        />
    );
}

export default Image;
