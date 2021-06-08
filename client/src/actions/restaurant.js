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

export const deleteRestaurant = async (token, _id) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-restaurant/${_id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const read = async (_id) =>
  await axios.get(`${process.env.REACT_APP_API}/restaurant/${_id}`);

export const updateRestaurant = async (token, data, _id) =>
  await axios.put(
    `${process.env.REACT_APP_API}/update-restaurant/${_id}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
);
