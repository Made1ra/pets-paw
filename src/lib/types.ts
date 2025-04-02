import type { Category, Action } from "@/lib/enums";

export type Breed = {
  reference_image_id: string;
  url: string;
  dateOfEditing?: string;
  category?: Category;
};

export type Log = {
  reference_image_id: string;
  dateOfEditing: string;
  category: Category;
  action: Action;
};
