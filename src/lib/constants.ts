export const rectangles = [
  {
    backgroundColor: "#a5b4fc",
    url: "/vote-table.svg",
    text: "VOTING",
  },
  {
    backgroundColor: "#86efac",
    url: "/pet-breeds.svg",
    text: "BREEDS",
  },
  {
    backgroundColor: "#fde68a",
    url: "/images-search.svg",
    text: "GALLERY",
  },
];

export const BASE_URL = "https://api.thecatapi.com/v1";

export const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const headers = new Headers({
  "x-api-key": API_KEY ?? "",
});
