import { useQueryClient, useMutation } from "@tanstack/react-query";

import { postImage } from "@/lib/requests";

export function useUploadImageMutation({
  onSuccess,
}: {
  onSuccess: () => void;
}) {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: postImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["searchedBreeds", "images"] });
      onSuccess();
    },
  });

  return { mutate, isPending, isError, isSuccess };
}
