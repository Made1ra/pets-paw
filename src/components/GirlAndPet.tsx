import styled from 'styled-components';
import girlAndPet from '../assets/girl-and-pet.svg';

const Container = styled.div`
    display: flex;
    position: relative;
`;

const Image = styled.div<{ $url: string }>`
    width: 48.4375rem;
    height: 56.25rem;
    flex-shrink: 0;

    background: url(${props => props.$url}) center / cover no-repeat;

    z-index: 1;
`;

const Rectangle = styled.div`
    width: 42.5rem;
    height: 52.5rem;
    flex-shrink: 0;

    border-radius: 1.25rem;
    background: #FBE0DC;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
`;

function GirlAndPet() {
    return (
        <Container>
            <Rectangle />
            <Image $url={girlAndPet} />
        </Container>
    );
}

export default GirlAndPet;
