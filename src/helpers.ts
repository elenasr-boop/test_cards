import { characterFromApi, characterType } from "./types/characterType";

export function safeString(str: string): string {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function isValidUrl(url: string): boolean {
  const regex = new RegExp(
      '^(https?:\\/\\/)' + // Протокол
      '((([a-z0-9-]+\\.)+[a-z]{2,})|' + // Домен
      'localhost|' + // Локальный хост
      '([0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}))' + // IP-адрес
      '(\\:[0-9]+)?' + // Порт
      '(\\/[^\\s]*)?$', // Путь
      'i' // Игнорировать регистр
  );

  return regex.test(url);
}

export function getFilteredCharacter (filter: string, characters: characterType[]): characterType[] {
  let filteredCharacters: characterType[] = [];
  switch (filter) {
    case "all":
      filteredCharacters = characters;
      break;
    case "films":
      filteredCharacters = characters.filter((card) => card.films.length > 0);
      break;
    case "games":
      filteredCharacters = characters.filter(
        (card) => card.videoGames.length > 0
      );
      break;
    case "tvShows":
      filteredCharacters = characters.filter((card) => card.tvShows.length > 0);
      break;
    case "likes":
      filteredCharacters = characters.filter((card) => card.isLiked === true);
      break;
    default:
      filteredCharacters = characters;
      break;
  }

  return filteredCharacters;
}

export function arrayTransformation (arr: characterFromApi[]): characterType[] {
  const newCharacters = arr.map((el: characterFromApi) => ({
    _id: el._id,
    name: el.name,
    image: el.imageUrl,
    films: el.films,
    videoGames: el.videoGames,
    url: el.sourceUrl,
    isLiked: false,
    apiUrl: el.url,
    tvShows: el.tvShows,
  }));

  return newCharacters;
}
