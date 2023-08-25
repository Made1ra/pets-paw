import { useSelector, useDispatch } from 'react-redux';
import { Breed, selectBreeds, addBreed, removeBreed } from '../store';
import { formatDate } from '../utilities/formatDate';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import FavouriteButton from './FavouriteButton';
import DislikeButton from './DislikeButton';

const StyledControls = styled.div`
    width: 15.5rem;
    height: 5rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem;
`;

function Controls({ reference_image_id }: Breed) {
    const breeds = useSelector(selectBreeds);
    const dispatch = useDispatch();

    const handleClick = (category: string, reference_image_id: string) => {
        const filteredBreeds = breeds.filter((breed) => breed.reference_image_id === reference_image_id)
        if (filteredBreeds.length === 0) {
            dispatch(addBreed({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category }))
        } else if (filteredBreeds.length > 0) {
            dispatch(removeBreed({ reference_image_id, category }))
        }
    };

    return (
        <StyledControls>
            <LikeButton onClick={() => handleClick('Likes', reference_image_id)} />
            <FavouriteButton onClick={() => handleClick('Favourites', reference_image_id)} />
            <DislikeButton onClick={() => handleClick('Dislikes', reference_image_id)} />
        </StyledControls>
    );
}

export default Controls;
