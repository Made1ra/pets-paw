import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';

function Gallery() {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome />
            </LeftContent>
        </Container>
    );
}

export default Gallery;
