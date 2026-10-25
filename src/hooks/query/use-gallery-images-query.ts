import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/utils";

export type GalleryFilters = {
  order: string;
  type: string;
  breedValue: string;
  value: string;
};

type GalleryImage = {
  id: string;
  url: string;
  breeds?: { reference_image_id: string; id: string; name?: string }[];
};

export function useGalleryImagesQuery(
  appliedFilters: GalleryFilters,
  selectedBreedId: string,
  enabled: boolean,
) {
  return useQuery({
    queryKey: ["gallery-images", appliedFilters, selectedBreedId],
    queryFn: ({ signal }) => {
      const breedOrder =
        appliedFilters.order === "Random"
          ? "RAND"
          : appliedFilters.order.toUpperCase();
      let mimeTypes = "";
      if (appliedFilters.type === "Static") {
        mimeTypes = "jpg,png";
      } else if (appliedFilters.type === "Animated") {
        mimeTypes = "gif";
      }

      const params = new URLSearchParams({
        has_breeds: "1",
        breed_ids: selectedBreedId,
        order: breedOrder,
        mime_types: mimeTypes,
        limit: appliedFilters.value.match(/\d+/)?.[0] ?? "5",
      });

      return fetcher<GalleryImage[]>(`/images/search?${params}`, { signal });
    },
    enabled,
  });
}
