import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import RightContent from './RightContent';
import GirlAndPet from './GirlAndPet'

function Home() {
    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome />
            </LeftContent>
            <RightContent>
                <GirlAndPet />
            </RightContent>
        </Container>
    );
}

export default Home;
