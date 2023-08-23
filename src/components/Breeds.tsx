import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';

function Breeds() {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome />
            </LeftContent>
        </Container>
    );
}

export default Breeds;
