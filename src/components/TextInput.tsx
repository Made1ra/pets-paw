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
            className="text-neutral-400 pl-4 outline-0 text-xl font-normal leading-[1.875rem] font-jost
            dark:bg-neutral-700 dark:bg-opacity-10 
            active:text-stone-900"
        />
    );
}

export default TextInput;
