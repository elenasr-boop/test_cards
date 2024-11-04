const BASE_URL = "https://api.disneyapi.dev/character";

export async function getCharacters() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

export async function goToPage(url: string) {
  const res = await  fetch(url, {
    method: "GET",
  })

  const  data = await res.json();
  return data;
}