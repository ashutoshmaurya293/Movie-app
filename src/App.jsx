import './App.css'
import { useEffect } from 'react'
import { fetchApi } from './utils/Api'
import { getApiConfeliation } from './Store/HomeSlice'
import { useDispatch,useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home"
import Details from './pages/details/Details';
import SearchResult from './pages/searchResult/SearchResult';
import Explore from './pages/explore/Explore';
import PageNotFound from './pages/404/PageNotFound';
import Header from './components/Header/Header'
import Footer from './components/footer/Footer'
function App() {
  const {url} = useSelector((state)=>state.Home)
  console.log(url);
  const dispath = useDispatch()
  useEffect(()=>{
api()
  },[])
  const api = ()=>{
    fetchApi("/movie/popular")
    .then((res)=>{
      // console.log(res);
      dispath(getApiConfeliation(res))
    })
  }

  return (
    <>
     <BrowserRouter>
     {/* <Header/> */}
     <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/:mediaType/:id' element= {<Details/>}/>
      <Route path='/search/:query' element= {<SearchResult/>}/>
      <Route path='/explore/:mediaType' element= {<Explore/>}/>
      <Route path='*' element= {<PageNotFound/>}/>
     </Routes>
     {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App
