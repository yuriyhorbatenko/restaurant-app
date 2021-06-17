import axios from "axios";

export const allRestaurants = async () =>
  await axios.get(`/api/restaurants`);


export const userRestaurants = async (token) =>
  await axios.get(`/api/user-restaurants`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const read = async (restaurantId) =>
  await axios.get(`/api/restaurant/${restaurantId}`);


export const createRestaurant = async (token, data) =>
  await axios.post(`/api/create-restaurant`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});

export const updateRestaurant = async (token, data, restaurantId) =>
  await axios.put(
    `/api/update-restaurant/${restaurantId}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
);

export const deleteRestaurant = async (token, restaurantId) =>
  await axios.delete(`/api/delete-restaurant/${restaurantId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
});


