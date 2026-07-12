import { useQuery } from "@tanstack/react-query";

import { getBreedsBySearchTerm } from "@/lib/requests";

export function useBreedsBySearchTermQuery(searchTerm: string) {
  const {
    isLoading,
    isError,
    data: searchedBreeds,
  } = useQuery<
    {
      name: string;
      image: {
        url: string;
      };
      id: string;
    }[]
  >({
    queryKey: ["searchedBreeds", searchTerm],
    queryFn: () => getBreedsBySearchTerm(searchTerm),
  });

  return { isLoading, isError, searchedBreeds };
}
