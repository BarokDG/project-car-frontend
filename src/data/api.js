import axios from "axios";

const apiUrl = "https://getzauto.herokuapp.com/cars/";

export const getCarsAPI = async (pageNumber = 1, filterOptions) => {
  try {
    let filterQueryString = "";

    for (let key in filterOptions) {
      filterQueryString += `&${key}=${
        filterOptions[key] ? filterOptions[key] : ""
      }`;
    }

    const { data } = await axios.get(
      `${apiUrl}?page=${pageNumber}${filterQueryString}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
