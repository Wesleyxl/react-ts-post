import { BaseUrl } from "../env";
import { validateToken } from "../services/auth";

export const apiPublicFetchGet = async (url: string) => {
  const response = await fetch(`${BaseUrl + url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  return json;
};

export const apiPublicFetchPost = async (url: string, body = {}) => {
  const response = await fetch(`${BaseUrl + url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  return json;
};

export const apiFetchPost = async (url: string, body = {}) => {
  const response = await fetch(`${BaseUrl + url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
    body: JSON.stringify(body),
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};

export const apiFetchGet = async (url: string) => {
  const response = await fetch(`${BaseUrl + url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    },
  });

  const json = await response.json();

  await validateToken(json);

  return json;
};
