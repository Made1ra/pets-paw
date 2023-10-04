type ImageProps = {
    src: string;
    alt?: string;
};

function Image({ src, alt }: ImageProps) {
    return (
        <img
            className="w-[640px] h-[360px] rounded-[20px]"
            src={src}
            alt={alt}
        />
    );
}

export default Image;
