import { useQuery } from "@tanstack/react-query";

import type { SearchQueryOption } from "@/lib/types";
import { getImages } from "@/lib/requests";

export function useImagesSearchQuery(query: SearchQueryOption) {
  const {
    isLoading,
    isError,
    data: searchedImages,
    refetch,
  } = useQuery<
    {
      id: string;
      url: string;
      breeds: {
        id: string;
        name: string;
        description: string;
        temperament: string;
        origin: string;
        weight: {
          metric: string;
        };
        life_span: string;
      }[];
    }[]
  >({
    queryKey: ["images", query],
    queryFn: () => getImages(query),
  });
  console.log(query);
  return { isLoading, isError, searchedImages, refetch };
}
