import { BASE_URL, headers } from "@/lib/constants";

export async function fetcher(input: string, init?: RequestInit) {
  try {
    const response = await fetch(`${BASE_URL}/${input}`, {
      ...init,
      headers,
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    throw error;
  }
}
