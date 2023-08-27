import styled from 'styled-components';

const StyledSelect = styled.select<{ $width: string }>`
    width: ${props => props.$width};
    height: 2.5rem;
    flex-shrink: 0;

    border-radius: 0.625rem;
    background: #F8F8F7;

    margin-left: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    border: none;

    &:hover {
        border: 2px solid #FBE0DC;
    }
`;

type SelectProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children?: React.ReactNode;
    $width: string;
}

function Select({ value, onChange, children, $width }: SelectProps) {
    return (
        <StyledSelect
            value={value}
            onChange={onChange}
            $width={$width}
        >
            {children}
        </StyledSelect>
    );
}

export default Select;
