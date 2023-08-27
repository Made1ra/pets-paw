import { useState } from 'react';
import styled from 'styled-components';
import Container from './Container';
import LeftContent from './LeftContent';
import Logo from './Logo';
import Welcome from './Welcome';
import LinkContainer from './LinkContainer';
import SearchBar from './SearchBar';
import Smiles from './Smiles';
import SmallLink from './SmallLink';
import LargeTextButton from './LargeTextButton';
import BreedsSelect from './BreedsSelect';
import Select from './Select';
import Option from './Option';
import SortRevertButton from './SortRevertButton';
import SortButton from './SortButton';

const RightContentContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        align-items: center;
    }
`;

const ActionsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0.5rem;
    padding: 1rem;
    width: 42.5rem;
    height: 48.875rem;
    flex-shrink: 0;
    flex-direction: column;

    border-radius: 1.25rem;
    background: #FFF;
`;

const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

type BreedsProps = {
    $isActive: number;
};

function Breeds({ $isActive }: BreedsProps) {
    const [value, setValue] = useState('Limit: 10');

    const handleClick = () => {

    };

    return (
        <Container>
            <LeftContent>
                <Logo />
                <Welcome $isActive={$isActive} />
            </LeftContent>
            <RightContentContainer>
                <LinkContainer>
                    <SearchBar />
                    <Smiles />
                </LinkContainer>
                <ActionsContainer>
                    <NavigationContainer>
                        <SmallLink />
                        <LargeTextButton $isActive={true}>BREEDS</LargeTextButton>
                        <BreedsSelect />
                        <Select
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            $width="6.3125rem"
                        >
                            <Option>Limit: 5</Option>
                            <Option>Limit: 10</Option>
                            <Option>Limit: 15</Option>
                            <Option>Limit: 20</Option>
                        </Select>
                        <SortRevertButton onClick={() => handleClick()} />
                        <SortButton onClick={() => handleClick()} />
                    </NavigationContainer>
                </ActionsContainer>
            </RightContentContainer>
        </Container>
    );
}

export default Breeds;
