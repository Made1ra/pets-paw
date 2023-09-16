import styled from 'styled-components';
import close from '../assets/close-20.svg';

const Overlay = styled.div`
    width: 42.5rem;
    height: 52.5rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: #F8F8F7;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
`;

const Heading = styled.div`
    color: #1D1D1D;
    font-family: Jost;
    font-size: 2.25rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Text = styled.div`
    color: #8C8C8C;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
`;

const Link = styled.a`
    color: #FF868E;
    font-family: Jost;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.875rem;
    text-decoration: none;
`;

const CloseButton = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: url(${close}) center no-repeat;
`;

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) {
        return null;
    }

    return (
        <Overlay>
            <Content>
                <Heading>Upload a .jpg or .png Cat Image</Heading>
                <Text>Any uploads must comply with the <Link target="_blank" href="https://thecatapi.com/privacy">upload guidelines</Link> or face deletion.</Text>
                {children}
                <CloseButton onClick={() => onClose()}></CloseButton>
            </Content>
        </Overlay>
    );
}

export default Modal;
