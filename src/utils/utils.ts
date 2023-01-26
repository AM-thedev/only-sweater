import { themeGet } from "@styled-system/theme-get";

export const getTheme = (query: string, fallback?: string) =>
  themeGet(query, fallback);