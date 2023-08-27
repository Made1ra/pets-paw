import { Link } from 'react-router-dom';
import Smile from './Smile';

function Smiles() {
    return (
        <>
            <Link to="/likes">
                <Smile imageTitle="like" />
            </Link>
            <Link to="/favourites">
                <Smile imageTitle="fav" />
            </Link>
            <Link to="/dislikes">
                <Smile imageTitle="dislike" />
            </Link>
        </>
    );
}

export default Smiles
