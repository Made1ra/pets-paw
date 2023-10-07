import { Link } from 'react-router-dom';
import voteTable from '../assets/vote-table.svg';
import petBreeds from '../assets/pet-breeds.svg';
import imagesSearch from '../assets/images-search.svg';
import Rectangle from './Rectangle';
import TextButton from './TextButton';

type WelcomeProps = {
    isActive: number;
};

function Welcome({ isActive }: WelcomeProps) {
    const rectangles = [
        {
            backgroundColor: 'bg-indigo-300',
            url: voteTable,
            text: 'VOTING'
        },
        {
            backgroundColor: 'bg-green-300',
            url: petBreeds,
            text: 'BREEDS'
        },
        {
            backgroundColor: 'bg-amber-200',
            url: imagesSearch,
            text: 'GALLERY'
        }
    ];

    return (
        <>
            <p className="w-[11.375rem] text-stone-900 text-[2.75rem] font-medium leading-[3.625rem] mt-16 dark:text-white">
                Hi!👋
            </p>
            <p className="text-neutral-400 text-xl font-normal mt-4">
                Welcome to MacPaw Bootcamp 2023
            </p>
            <p className="text-stone-900 text-xl font-medium font-jost mt-16 dark:text-white">
                Lets start using The Cat API
            </p>
            <div className="flex flex-col mt-8 md:flex-row">
                {rectangles.map((rectangle, i) => (
                    <div key={rectangle.text}>
                        <Link
                            to={`/${rectangle.text.toLowerCase()}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <Rectangle
                                backgroundColor={rectangle.backgroundColor}
                                url={rectangle.url}
                                isActive={isActive === i + 1}
                            />
                        </Link>
                        <Link
                            to={`/${rectangle.text.toLowerCase()}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <TextButton isActive={isActive === i + 1}>{rectangle.text}</TextButton>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Welcome;
