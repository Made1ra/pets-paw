import { useSelector, useDispatch } from 'react-redux';
import { Breed, addBreed, removeBreed, addLog } from '../store';
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

type ControlsProps = {
    reference_image_id: string;
    url: string;
    onLikeDislikeClick: () => void;
};

function Controls({ reference_image_id, url, onLikeDislikeClick }: ControlsProps) {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const dispatch = useDispatch();

    const handleClick = (category: string, reference_image_id: string) => {
        const filteredBreeds = breeds.find((breed) => breed.reference_image_id === reference_image_id);
        if (!filteredBreeds) {
            dispatch(addBreed({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category, url: url }));
            dispatch(addLog({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category, action: 'added to' }));
        } else if (filteredBreeds && filteredBreeds.category !== category) {
            dispatch(removeBreed({ reference_image_id, dateOfEditing: formatDate(new Date()), category }));
            dispatch(addLog({ reference_image_id, dateOfEditing: formatDate(new Date()), category: filteredBreeds.category, action: 'removed from' }));
            dispatch(addBreed({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category }));
            dispatch(addLog({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category, action: 'added to' }));
        } else {
            dispatch(removeBreed({ reference_image_id, dateOfEditing: formatDate(new Date()), category }));
            dispatch(addLog({ reference_image_id, dateOfEditing: formatDate(new Date()), category: category, action: 'removed from' }));
        }

        if (category === 'Likes' || category === 'Dislikes') {
            onLikeDislikeClick();
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
