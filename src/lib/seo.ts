export const SITE_URL = "https://maxplayer.website";
export const SITE_NAME = "Max Player";
export const SITE_TAGLINE = "O Máximo em Desempenho e Qualidade de IPTV em 4K e Full HD";
export const SITE_DESCRIPTION = "Max Player: reprodutor de IPTV em 4K e Full HD com alta performance, grade de canais completa, filmes, séries e esportes ao vivo sem travamentos.";
export const DEFAULT_OG_IMAGE = "https://maxplayer.website/og-image.webp";

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${cleanPath === "/" ? "" : cleanPath}`;
}
