type ImageProps = {
    src: string;
};

function Image({ src }: ImageProps) {
    return (
        <img className="w-[640px] h-[360px] rounded-[20px]" src={src} />
    );
}

export default Image;
