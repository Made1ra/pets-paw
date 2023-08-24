import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';

type GalleryProps = {
    $isActive: number;
};

function Gallery({ $isActive }: GalleryProps) {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
        </Container>
    );
}

export default Gallery;
