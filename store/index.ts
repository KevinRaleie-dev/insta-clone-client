export const setToken = (token: string) => localStorage.setItem('token', token);

export const getToken = (key: string) => localStorage.getItem(key);

export const removeToken = (key: string) => localStorage.removeItem(key);