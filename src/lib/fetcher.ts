import { BASE_URL, headers } from "@/lib/constants";

export async function fetcher<T>(
  input: string,
  init: RequestInit = {},
): Promise<T> {
  const initHeaders = new Headers(init.headers);
  const requestHeaders = new Headers(headers);
  initHeaders.forEach((value, key) => {
    requestHeaders.set(key, value);
  });

  try {
    const response = await fetch(`${BASE_URL}${input}`, {
      ...init,
      headers: requestHeaders,
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json() as Promise<T>;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
