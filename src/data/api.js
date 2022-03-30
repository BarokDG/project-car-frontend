import axios from "axios";

const apiUrl = "http://localhost:5000/cars/";

export const getCarsAPI = async (pageNumber = 1, year = 2107) => {
  try {
    const { data } = await axios.get(
      `${apiUrl}?page=${pageNumber}&year=${year}`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
