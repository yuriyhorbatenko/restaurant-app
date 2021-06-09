import axios from "axios";

export const allRestaurants = async () =>
  await axios.get(`${process.env.REACT_APP_API}/restaurants`);


export const userRestaurants = async (token) =>
  await axios.get(`${process.env.REACT_APP_API}/user-restaurants`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const read = async (restaurantId) =>
  await axios.get(`${process.env.REACT_APP_API}/restaurant/${restaurantId}`);


export const createRestaurant = async (token, data) =>
  await axios.post(`${process.env.REACT_APP_API}/create-restaurant`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const updateRestaurant = async (token, data, restaurantId) =>
  await axios.put(
    `${process.env.REACT_APP_API}/update-restaurant/${restaurantId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
);

export const deleteRestaurant = async (token, restaurantId) =>
  await axios.delete(`${process.env.REACT_APP_API}/delete-restaurant/${restaurantId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});


