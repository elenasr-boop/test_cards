const BASE_URL = "http://api.disneyapi.dev/character";

export async function getCharacters() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

export async function goToPage(numOfPage: number) {
  const res = await fetch(
    `http://api.disneyapi.dev/character?page=${numOfPage}&pageSize=50`,
    {
      method: "GET",
    }
  );

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
