import { useMutation } from "@tanstack/react-query";

import { fetcher } from "@/lib/fetcher";

export function useUploadImageMutation(onSuccess: () => void) {
  return useMutation({
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      return fetcher<unknown>("/images/upload", {
        method: "POST",
        body: formData,
      });
    },
    onSuccess,
  });
}
