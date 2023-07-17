export const getLocalStorage = (key: string): string | undefined => {
  const token = localStorage.getItem(key);

  if (token) {
    return token;
  } 
};

export const setLocalStorage = (token: string): void => {
  JSON.stringify(localStorage.setItem('token', token));
};

export const getSessionStorage = (key: string): string | undefined => {
  const token = sessionStorage.getItem(key);

  if (token) {
    return token;
  }
};

export const setSessionStorage = (token: string): void => {
  JSON.stringify(sessionStorage.setItem('token', token));
};

export const removeUserToken = (key: string): void => {
  JSON.stringify(sessionStorage.removeItem(key));
  JSON.stringify(localStorage.removeItem(key));
};