type ImageProps = {
    src: string;
    alt: string;
};

function Image({ src, alt }: ImageProps) {
    return (
        <img
            className="w-[43rem] h-[22.5rem] rounded-[1.25rem]
            lg:w-[40rem]"
            src={src}
            alt={alt}
        />
    );
}

export default Image;
