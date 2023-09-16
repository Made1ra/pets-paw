import { Link } from 'react-router-dom';
import Smile from './Smile';

function Smiles() {
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
                        <Link to={`/${smile.title}`}>
                            <Smile title={smile.title} />
                        </Link>
                    </div >
                ))
            }
        </>
    );
}

export default Smiles;
