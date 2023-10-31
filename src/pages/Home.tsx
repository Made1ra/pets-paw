import Container from '../components/Container';
import LeftContent from '../components/LeftContent';
import RightContent from '../components/RightContent';
import GirlAndPet from '../components/GirlAndPet'

function Home() {
    return (
        <Container>
            <LeftContent isActive={4} />
            <RightContent>
                <GirlAndPet />
            </RightContent>
        </Container>
    );
}

export default Home;
