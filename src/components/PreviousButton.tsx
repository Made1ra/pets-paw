import styled from 'styled-components';
import back from '../assets/back-20.svg';
import backWhite from '../assets/back-white-20.svg';

const StyledPreviousButton = styled.button`
    display: flex;
    padding: 0.75rem 1.875rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;

    border-radius: 0.625rem;
    border: none;
    background: #FBE0DC;

    &:hover {
        background: #FF868E;
    }
`;

const Back = styled.div`
    width: 1rem;
    height: 1rem;
    background: url(${back}) center no-repeat;

    &:hover {
        background: url(${backWhite}) center no-repeat;
    }
`;

function PreviousButton() {
    return (
        <StyledPreviousButton>
            <Back />
        </StyledPreviousButton>
    );
}

export default PreviousButton;
