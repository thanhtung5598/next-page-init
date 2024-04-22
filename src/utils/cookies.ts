import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export enum CookieKey {
  accessToken = 'accessToken',
}

export const saveValueCookie = <T>(key: CookieKey, value: T) => {
  setCookie(CookieKey[key], JSON.stringify(value));
};

export const getValueCookie = <T>(key: CookieKey) => {
  const value = getCookie(CookieKey[key]);
  if (value) return JSON.parse(value) as T;
  return undefined;
};

export const deleteValueCookie = (key: CookieKey) => {
  deleteCookie(CookieKey[key]);
};
