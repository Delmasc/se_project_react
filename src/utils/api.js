const baseUrl = "http://localhost:3001";

export const _handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export function request(url, headers) {
  return fetch(url, headers).then(_handleServerResponse);
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
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  return request(`${baseUrl}/items/${id}`, options);
};

const api = {
  getItems,
  deleteItem,
};

export const addItem = ({ name, imageUrl, weather }) => {
  const headers = {
    "Content-Type": "application/json",
  };

  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(_handleServerResponse);
};

export const removeItem = (itemID) => {
  return fetch(`${this._baseUrl}/items/${itemID}`, {
    method: "DELETE",
    headers,
  }).then(_handleServerResponse);
};

export default api;
