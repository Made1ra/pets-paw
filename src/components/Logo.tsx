import styled from 'styled-components';
import Paw from '../assets/paw.svg';
import PetsPaw from '../assets/PetsPaw.svg';

const StyledLogo = styled.div`
    display: flex;
    width: 6.63506rem;
    height: 1.5rem;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    gap: 0.49338rem;
    flex-shrink: 0;
`;

function Logo() {
    return (
        <StyledLogo>
            <div>
                <img src={Paw} />
            </div>
            <div>
                <img src={PetsPaw} />
            </div>
        </StyledLogo>
    );
}

export default Logo;
