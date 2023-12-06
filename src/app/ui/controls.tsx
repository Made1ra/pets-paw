import { useSelector, useDispatch } from 'react-redux';
import { Breed, addBreed, removeBreed, addLog } from '@/app/lib/store';
import { formatDate } from '@/app/lib/utils/formatDate';
import LikeButton from '@/app/ui/likeButton';
import FavouriteButton from '@/app/ui/favouriteButton';
import DislikeButton from '@/app/ui/dislikeButton';

function Controls({
    reference_image_id,
    url,
    onLikeDislikeClick
}: {
    reference_image_id: string
    url: string
    onLikeDislikeClick: () => void
}) {
    const breeds = useSelector((state: { breeds: { breeds: Breed[] } }) => state.breeds.breeds);
    const dispatch = useDispatch();

    function handleClick(category: string, reference_image_id: string) {
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
        <div className="flex flex-shrink-0 items-center justify-center w-[11.125rem] h-11 m-4
        sm:w-64 sm:h-20">
            <LikeButton onClick={() => handleClick('Likes', reference_image_id)} />
            <FavouriteButton onClick={() => handleClick('Favourites', reference_image_id)} />
            <DislikeButton onClick={() => handleClick('Dislikes', reference_image_id)} />
        </div>
    );
}

export default Controls;
