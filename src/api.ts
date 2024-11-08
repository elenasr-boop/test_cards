const BASE_URL = "http://api.disneyapi.dev/character?page=1&pageSize=50L";

export async function getCharacters() {
  const res = await fetch(BASE_URL, {
    method: "GET",
  });

  const data = await res.json();
  return data;
}

export async function goToPage(numOfPage: number) {
  const res = await  fetch(`http://api.disneyapi.dev/character?page=${numOfPage}&pageSize=50`, {
    method: "GET",
  })

  const  data = await res.json();
  return data;
}