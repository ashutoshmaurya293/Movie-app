import { fethApi } from './utils/Api'
import './App.css'
import { useEffect } from 'react'

function App() {
  useEffect(()=>{
api()
  },[])
  const api = ()=>{
    fethApi("/movie/popular")
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <>
      <h1>App</h1>
    </>
  )
}

export default App
