export const set = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const remove = (key: string): void => {
  localStorage.removeItem(key);
};

export const get = (key: string): string | null => {
  return localStorage.getItem(key);
};
