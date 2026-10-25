import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";

type BreedImage = {
  id: string;
  url: string;
  breeds?: { id: string; name: string }[];
};

export function useBreedImagesQuery(
  selectedBreedId: string,
  limit: string,
  enabled: boolean,
) {
  return useQuery({
    queryKey: ["breed-images", selectedBreedId, limit],
    queryFn: ({ signal }) => {
      const params = new URLSearchParams({
        has_breeds: "1",
        breed_ids: selectedBreedId,
        limit: limit.replace(/^\D+/, ""),
      });

      return fetcher<BreedImage[]>(`/images/search?${params}`, { signal });
    },
    enabled,
  });
}
