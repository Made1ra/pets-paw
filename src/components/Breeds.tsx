import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';

type BreedsProps = {
    $isActive: number;
};

function Breeds({ $isActive }: BreedsProps) {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
        </Container>
    );
}

export default Breeds;
