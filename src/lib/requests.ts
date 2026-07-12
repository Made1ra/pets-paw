import type { SearchQueryOption } from "@/lib/types";
import { fetcher, buildSearchQuery } from "@/lib/utils";

export async function getAllBreeds() {
  return fetcher("breeds");
}

export async function getBreedsBySearchTerm(searchTerm: string) {
  return fetcher(`breeds/search?q=${searchTerm}`);
}

export async function getImages(query: SearchQueryOption) {
  const searchQuery = buildSearchQuery(query);

  return fetcher(`images/search?${searchQuery}`);
}

export async function postImage(file: File | null) {
  const formData = new FormData();
  if (file) {
    formData.append("file", file);
  }

  return fetcher("images/upload", {
    method: "POST",
    body: formData,
  });
}
