import axios from "axios";

const apiUrl = "http://localhost:5000/cars/";

export const getCarsAPI = async (pageNumber = 1) => {
  console.log(pageNumber);
  try {
    const { data } = await axios.get(`${apiUrl}?page=${pageNumber}`);
    return data;
  } catch (error) {
    throw error;
  }
};
