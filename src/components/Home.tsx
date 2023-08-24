import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import RightContent from './RightContent';
import GirlAndPet from './GirlAndPet'

type HomeProps = {
    $isActive: number;
};

function Home({ $isActive }: HomeProps) {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
            <RightContent>
                <GirlAndPet />
            </RightContent>
        </Container>
    );
}

export default Home;
