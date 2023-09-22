type TextInputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

function TextInput({ value, onChange, onKeyDown }: TextInputProps) {
    return (
        <input
            placeholder="Search for breeds by name"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            className="text-neutral-400 pl-4 outline-none text-xl font-normal leading-[30px] font-jost active:text-stone-900"
        />
    );
}

export default TextInput;
