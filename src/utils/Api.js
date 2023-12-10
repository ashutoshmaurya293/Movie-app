import axios from "axios";

const BaseUrl = "https://api.themoviedb.org/3";
const Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjIzM2U5YTYwZjk3ZGE1YWIxZDUyNDIzNjc1MzhmNiIsInN1YiI6IjY1NzQ4YWE4YTFkMzMyMDBmZWJjODM5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPayxM4Tk3GmSP2yqdDpaWekM5EY5rhK-FO9raQTFfg";

const headers = {
  Authorization: "Bearer " + Token // Fix the typo here
};

export const fetchApi = async (url, params) => {
  try {
    const { data } = await axios.get(BaseUrl + url, {
      headers,
      params
    });
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
