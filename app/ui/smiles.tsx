import Link from 'next/link';
import Smile from '@/app/ui/smile';

export default function Smiles() {
    const smiles = [
        {
            title: 'likes'
        },
        {
            title: 'favourites'
        },
        {
            title: 'dislikes'
        }
    ];

    return (
        <>
            {
                smiles.map((smile) => (
                    <div key={smile.title}>
                        <Link href={`/${smile.title}`}>
                            <Smile title={smile.title} />
                        </Link>
                    </div >
                ))
            }
        </>
    );
}
