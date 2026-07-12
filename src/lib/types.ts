import type { Category, Action, Order } from "@/lib/enums";

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

export type SearchQueryOption = {
  has_breeds?: 1 | 0;
  order?: Order;
  breed_ids?: string;
  limit?: number;
  mime_types?: string;
};
