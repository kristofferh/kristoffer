import Cookies from "js-cookie";
import { PasswordPrompt } from "../components/password-prompt";
import React from "react";

const COOKIE_NAME = "pw-protected";

export const setSessionPassword = (password, expires = undefined) => {
  Cookies.set(COOKIE_NAME, password, { sameSite: "strict", expires });
};

export const getCookiePassword = () => {
  return Cookies.get(COOKIE_NAME);
};

export const getQueryPassword = (search) => {
  const params = new URLSearchParams(search);
  const secret = params.get("secret");
  return secret ? base64Encode(secret) : undefined;
};

export const isProtectedPage = (pathname, paths) => {
  return paths.some((path) => pathname.startsWith(path));
};

export const base64Encode = (string) => {
  return typeof window !== "undefined"
    ? btoa(string)
    : Buffer.from(string).toString("base64");
};

export const base64Decode = (string) => {
  return typeof window !== "undefined"
    ? atob(string)
    : Buffer.from(string, "base64").toString("binary");
};

export const checkPassword = (location, pws, paths) => {
  const hasPageLevelProtection = paths && paths.length;
  const hasPasswords = pws && pws.length;
  if (!hasPasswords || !hasPageLevelProtection) {
    return;
  }
  const { pathname, search } = location;
  if (!isProtectedPage(pathname, paths)) {
    return;
  }

  const passwordCandidate = getQueryPassword(search) || getCookiePassword();
  if (pws.includes(passwordCandidate)) {
    setSessionPassword(passwordCandidate, 1);
    return;
  }
  return <PasswordPrompt />;
};
