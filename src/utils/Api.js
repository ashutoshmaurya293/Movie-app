import axios from "axios";

const BaceUrl = "https://api.themoviedb.org/3"
 const Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjIzM2U5YTYwZjk3ZGE1YWIxZDUyNDIzNjc1MzhmNiIsInN1YiI6IjY1NzQ4YWE4YTFkMzMyMDBmZWJjODM5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GPayxM4Tk3GmSP2yqdDpaWekM5EY5rhK-FO9raQTFfg"

 const headers = {
    Authorization:"bearee " + Token
 }
 export const fethApi = async(url,params) =>{
try {
    const {data} = await axios.get(BaceUrl + url,{
        headers,
        params
    })
} catch (error) {
    console.log(error);
}
 }