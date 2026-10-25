import { useQuery } from "@tanstack/react-query";

import { fetcher } from "@/lib/utils";

type VotingImage = {
  id: string;
  url: string;
};

export function useVotingImageQuery() {
  return useQuery({
    queryKey: ["voting-image"],
    queryFn: async ({ signal }) => {
      const params = new URLSearchParams({ has_breeds: "1", limit: "1" });
      const images = await fetcher<VotingImage[]>(`/images/search?${params}`, {
        signal,
      });

      return images[0] ?? null;
    },
  });
}
