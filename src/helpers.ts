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