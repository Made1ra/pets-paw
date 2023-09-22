import Container from '../components/Container';
import LeftSection from '../components/LeftSection';
import RightContent from '../components/RightContent';
import GirlAndPet from '../components/GirlAndPet'

function Home() {
    return (
        <Container>
            <LeftSection isActive={4} />
            <RightContent>
                <GirlAndPet />
            </RightContent>
        </Container>
    );
}

export default Home;
