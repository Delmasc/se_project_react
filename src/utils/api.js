import { baseUrl }  from "../utils/constants";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(url, headers) {
  return fetch(url, headers).then(handleServerResponse);
}

const getItems = () => {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return request(`${baseUrl}/items`, options);
};

const deleteItem = (id) => {
  const token = localStorage.getItem("jwt");
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return request(`${baseUrl}/items/${id}`, options);
};

const handleCardLike = (id, isLiked) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    return Promise.reject("No auth token");
  }
  const options = {
    method: isLiked ? "DELETE" : "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return request(`${baseUrl}/items/${id}/likes`, options);
};

const api = {
  getItems,
  deleteItem,
  handleCardLike,
};

export const addItem = ({ name, imageUrl, weather }) => {
  const token = localStorage.getItem("jwt");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(handleServerResponse);
};

export const removeItem = (itemID) => {
  return fetch(`${baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers,
  }).then(handleServerResponse);
};

export default api;
