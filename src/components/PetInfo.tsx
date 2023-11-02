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
        <div className="w-[40rem] h-fit rounded-[1.25rem] border-2 border-red-100 mt-6 p-2
        max-sm:w-[18.4375rem]
        sm:ml-14
        lg:ml-0
        dark:border-rose-400 dark:border-opacity-20">
            <div className="flex justify-center">
                <div className="w-fit text-stone-900 text-center text-4xl font-medium font-jost -mt-8 bg-white z-20
                dark:text-white dark:bg-zinc-800 dark:bg-opacity-5">
                    {name}
                </div>
            </div>
            <div className="text-neutral-400 text-center text-xl font-medium font-jost">
                {description}
            </div>
            <div className="flex mt-4
            max-sm:flex-col">
                <div className="w-[16.875rem]">
                    <span className="text-stone-900 text-base font-medium font-jost dark:text-white">
                        Temperament:<br />
                    </span>
                    <span className="text-neutral-400 text-base font-normal font-jost">
                        {temperament}
                    </span>
                </div>
                <div className="flex-1
                sm:ml-4">
                    <div className="w-[16.33063rem]">
                        <span className="text-stone-900 text-base font-medium font-jost dark:text-white">
                            Origin:
                        </span>
                        <span className="text-neutral-400 text-base font-normal font-jost">
                            {` ${origin}`}
                        </span>
                    </div>
                    <div className="w-[16.33063rem] mt-2">
                        <span className="text-stone-900 text-base font-medium font-jost dark:text-white">
                            Weight:
                        </span>
                        <span className="text-neutral-400 text-base font-normal font-jost">
                            {` ${weight} kgs`}
                        </span>
                    </div>
                    <div className="w-[16.875rem] mt-2">
                        <span className="text-stone-900 text-base font-medium font-jost dark:text-white">
                            Life span:
                        </span>
                        <span className="text-neutral-400 text-base font-normal font-jost">
                            {` ${lifeSpan} years`}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetInfo;
