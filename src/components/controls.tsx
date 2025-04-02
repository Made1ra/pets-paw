import type { Category } from "@/lib/types";
import { useBreedStore } from "@/lib/stores/breed";
import { formatDate } from "@/lib/utils/format-date";
import { useLogStore } from "@/lib/stores/log";
import LikeButton from "@/components/like-button";
import FavouriteButton from "@/components/favourite-button";
import DislikeButton from "@/components/dislike-button";

function Controls({
  reference_image_id,
  url,
  onLikeDislikeClick,
}: {
  reference_image_id: string;
  url: string;
  onLikeDislikeClick: () => void;
}) {
  const breeds = useBreedStore((state) => state.breeds);

  const addBreed = useBreedStore((state) => state.addBreed);

  const removeBreed = useBreedStore((state) => state.removeBreed);

  const addLog = useLogStore((state) => state.addLog);

  const handleClick = (category: Category, reference_image_id: string) => {
    const filteredBreeds = breeds.find(
      (breed) => breed.reference_image_id === reference_image_id,
    );
    if (!filteredBreeds) {
      addBreed({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category,
        url,
      });

      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category,
        action: "added to",
      });
    } else if (filteredBreeds && filteredBreeds.category !== category) {
      removeBreed(reference_image_id);

      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category,
        action: "removed from",
      });

      addBreed({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category,
        url,
      });

      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: category,
        action: "added to",
      });
    } else {
      removeBreed(reference_image_id);

      addLog({
        reference_image_id,
        dateOfEditing: formatDate(new Date()),
        category: category,
        action: "removed from",
      });
    }

    if (category === "Likes" || category === "Dislikes") {
      onLikeDislikeClick();
    }
  };

  return (
    <div className="m-4 flex h-11 w-[11.125rem] flex-shrink-0 items-center justify-center sm:h-20 sm:w-64">
      <LikeButton onClick={() => handleClick("Likes", reference_image_id)} />
      <FavouriteButton
        onClick={() => handleClick("Favourites", reference_image_id)}
      />
      <DislikeButton
        onClick={() => handleClick("Dislikes", reference_image_id)}
      />
    </div>
  );
}

export default Controls;
