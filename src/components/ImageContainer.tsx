type ImageContainerProps = {
    children: React.ReactNode;
};

function ImageContainer({ children }: ImageContainerProps) {
    return (
        <div className="flex flex-col items-center justify-center">
            {children}
        </div>
    );
}

export default ImageContainer;
