export const siteBase = import.meta.env.BASE_URL;

export function siteUrl(path = "") {
  return `${siteBase}${path}`.replace(/\/\/+/g, "/");
}
