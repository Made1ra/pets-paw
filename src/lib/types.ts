export type Category = "Likes" | "Favourites" | "Dislikes";

export type Breed = {
  reference_image_id: string;
  url: string;
  dateOfEditing?: string;
  category?: Category;
};

export type Action = "added to" | "removed from";

export type Log = {
  reference_image_id: string;
  dateOfEditing: string;
  category: Category;
  action: Action;
};
