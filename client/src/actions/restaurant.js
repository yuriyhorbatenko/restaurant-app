import axios from "axios";

export const createRestaurant = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-restaurant`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const allRestaurants = async () =>
  await axios.get(`${process.env.REACT_APP_API}/restaurants`);

export const userRestaurants = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user-restaurants`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const deleteRestaurant = async (token, restaurant_id) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-restaurant/${restaurant_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const read = async (restaurant_id) =>
  await axios.get(`${process.env.REACT_APP_API}/restaurant/${restaurant_id}`);

export const updateRestaurant = async (token, data, restaurant_id) =>
  await axios.put(
    `${process.env.REACT_APP_API}/update-restaurant/${restaurant_id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
);
