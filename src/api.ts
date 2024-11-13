const BASE_URL = "https://api.disneyapi.dev/character";

export async function getCharacters() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

export async function searchBy(request: string) {
  const res = await fetch(BASE_URL + "?name=" + request, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}
