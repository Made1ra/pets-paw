type PetInfoProps = {
    name: string;
    description: string;
    temperament: string;
    origin: string;
    weight: string;
    lifeSpan: string;
};

function PetInfo({ name, description, temperament, origin, weight, lifeSpan }: PetInfoProps) {
    return (
        <div className="w-[640px] h-[204px] rounded-[20px] border-2 border-red-100">
            <div className="text-stone-900 text-4xl font-medium font-jost">
                {name}
            </div>
            <div className="text-neutral-400 text-xl font-medium font-jost">
                {description}
            </div>
            <div className="w-[270px]">
                <span className="text-stone-900 text-base font-medium font-jost">
                    Temperament:<br />
                </span>
                <span className="text-neutral-400 text-base font-normal font-jost">
                    {temperament}
                </span>
            </div>
            <div className="w-[261.29px]">
                <span className="text-stone-900 text-base font-medium font-jost">
                    Origin:
                </span>
                <span className="text-neutral-400 text-base font-normal font-jost">
                    {origin}
                </span>
            </div>
            <div className="w-[261.29px]">
                <span className="text-stone-900 text-base font-medium font-jost">
                    Weight:
                </span>
                <span className="text-neutral-400 text-base font-normal font-jost">
                    {`${weight} kgs`}
                </span>
            </div>
            <div className="w-[270px]">
                <span className="text-stone-900 text-base font-medium font-jost">
                    Life span:
                </span>
                <span className="text-neutral-400 text-base font-normal font-jost">
                    {`${lifeSpan} years`}
                </span>
            </div>
        </div>
    );
}

export default PetInfo;
