import { characterFromApi } from "./types/characterType";

const BASE_URL = "https://api.disneyapi.dev/character";

export async function getCharacters(): Promise<characterFromApi> {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  return data.data;
}

export async function searchBy(request: string): Promise<characterFromApi> {
  const res = await fetch(BASE_URL + "?name=" + request, {
    method: "GET",
  });

  const data = await res.json();
  return data.data;
}
