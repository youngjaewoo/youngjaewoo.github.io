export const siteBase = import.meta.env.BASE_URL;

export function siteUrl(path = "") {
  const cleanPath = path.replace(/^\/+/, "");
  return `${siteBase}${cleanPath}`;
}
