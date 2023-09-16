type OptionProps = {
    children?: string;
    value?: string;
}

function Option({ children }: OptionProps) {
    return (
        <option className="text-neutral-400 text-base font-normal leading-normal">
            {children}
        </option>
    );
}

export default Option;
