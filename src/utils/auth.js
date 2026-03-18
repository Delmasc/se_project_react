// auth.js
import { handleServerResponse } from "./api";

const baseurl = "http://localhost:3001";

export const editProfile = ({ name, avatar }) => {
  return fetch(`${baseurl}/users/me`, {
    method: "patch",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar }),
  }).then(handleServerResponse);
};

export const register = ({ name, avatar, email, password }) => {
  return fetch(`${baseurl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then(handleServerResponse);
};

export const checkToken = (token) => {
  return fetch(`${baseurl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(handleServerResponse);
};

export const authorize = ({ email, password }) => {
  return fetch(`${baseurl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then(handleServerResponse);
};
