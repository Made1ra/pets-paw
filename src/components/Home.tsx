import styled from 'styled-components';
import Logo from './Logo';
import Welcome from './Welcome';
import GirlAndPet from './GirlAndPet';

const StyledHome = styled.div`
    width: 100%;
    max-width: 90rem;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    float: right;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        margin-left: 1rem;
    }
`;

const RightContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media (max-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

function Home() {
    return (
        <StyledHome>
            <LeftContent>
                <Logo />
                <Welcome />
            </LeftContent>
            <RightContent>
                <GirlAndPet />
            </RightContent>
        </StyledHome>
    );
}

export default Home;
