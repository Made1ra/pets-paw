import { useQuery } from "@tanstack/react-query";

import { getAllBreeds } from "@/lib/requests";

export function useAllBreedsQuery() {
  const {
    isLoading,
    isError,
    data: allBreeds,
  } = useQuery<
    {
      id: string;
      name: string;
      image: {
        url: string;
        id: string;
      };
    }[]
  >({
    queryKey: ["breeds"],
    queryFn: getAllBreeds,
    staleTime: Infinity,
  });

  return { isLoading, isError, allBreeds };
}
