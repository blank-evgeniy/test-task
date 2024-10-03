//функция для сокращения слишком длинных строк
export const truncate = (str: string, max: number, ellipsis = "…") => {
  if (str.length <= max) return str;

  const trimmed = str.slice(0, max - 1);

  return trimmed + ellipsis;
};
