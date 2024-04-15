import { deleteCookie, getCookie, setCookie } from "cookies-next";

const CookieKey = {
  accessToken: "accessToken",
};

export const saveValueCookie = <T>(key: keyof typeof CookieKey, value: T) => {
  setCookie(CookieKey[key], JSON.stringify(value));
};

export const getValueCookie = <T>(key: keyof typeof CookieKey) => {
  const value = getCookie(CookieKey[key]);
  if (value) return JSON.parse(value) as T;
};

export const deleteValueCookie = (key: keyof typeof CookieKey) => {
  deleteCookie(CookieKey[key]);
};
