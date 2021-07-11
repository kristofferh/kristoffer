import Cookies from "js-cookie";
import { Prompt } from "../components/prompt";
import React from "react";

const COOKIE_NAME = "pw-protected";

export const setSessionPassword = (password, expires = undefined) => {
  Cookies.set(COOKIE_NAME, password, { sameSite: "strict", expires });
};

export const getCookiePassword = () => {
  const cookie = Cookies.get(COOKIE_NAME);
  return cookie ? base64Decode(cookie) : undefined;
};

export const getQueryPassword = (search) => {
  const params = new URLSearchParams(search);
  return params.get("secret");
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

export const checkPassword = (location, password, paths) => {
  const hasPageLevelProtection = paths && paths.length > 0;
  if (!password || !hasPageLevelProtection) {
    return;
  }
  const { pathname, search } = location;
  if (!isProtectedPage(pathname, paths)) {
    return;
  }

  const passwordCandidate = getQueryPassword(search) || getCookiePassword();
  if (passwordCandidate === password) {
    setSessionPassword(base64Encode(password), 1);
    console.log("nice");
    return;
  }
  console.log("hmm");
  return <Prompt />;
};
