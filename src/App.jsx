import './App.css'
import { useEffect } from 'react'
import { fetchApi } from './utils/Api'
import { getApiConfeliation } from './Store/HomeSlice'
import { useDispatch,useSelector } from "react-redux";
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
      <h1>{url.total_pages}</h1>
    </>
  )
}

export default App
