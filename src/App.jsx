import "./App.css";
import { useEffect } from "react";
import { fetchApi } from "./utils/Api";
import { getApiConfeliation, getGenres } from "./Store/HomeSlice";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
function App() {
  const { url } = useSelector((state) => state.Home);
  // console.log(url);
  const dispath = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCsll()
  }, []);
  const fetchApiConfig = () => {
    fetchApi("/configuration").then((res) => {
      // console.log(res);
      const url = {
        backdrop: "https://image.tmdb.org/t/p/original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };
      dispath(getApiConfeliation(url));
    });

  };
  const genresCsll = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};
    endPoints.forEach((ele) => {
      promises.push(fetchApi(`/genre/${ele}/list`));
    });
    const data = await Promise.all(promises);
    // console.log(data);
    data.map(({genres})=>{
      // console.log(genres);
      return genres.map((item)=>(allGenres[item.id] = item))
    })
    // console.log(allGenres);
    dispath(getGenres(allGenres))
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
