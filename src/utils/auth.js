// auth.js
import { handleServerResponse } from "./api";

const baseUrl = "http://localhost:3001";

export const editProfile = ({ name, avatar }) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
};

export const register = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleServerResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};
